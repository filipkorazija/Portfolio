'use client';
import { useEffect, useRef, useState } from 'react';
import type { KeyboardEvent } from 'react';
import Image from 'next/image';
import Icon from './Icon';
import { categories, projects, type Project } from './project-data';
import styles from './Projects.module.css';
import useMedia from './useMedia';

function Gallery({ project, initialImage, close }: { project: Project; initialImage: number; close: () => void }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const [index, setIndex] = useState(initialImage);
  const images = [project.image, ...(project.gallery ?? [])];
  const step = (direction: number) => setIndex(current => (current + direction + images.length) % images.length);
  useEffect(() => {
    const element = dialog.current;
    const previousOverflow = document.body.style.overflow;
    const previouslyFocused = document.activeElement as HTMLElement | null;
    element?.showModal();
    document.body.style.overflow = 'hidden';
    return () => {
      element?.close();
      document.body.style.overflow = previousOverflow;
      previouslyFocused?.focus();
    };
  }, []);

  return <dialog ref={dialog} className={styles.gallery} aria-labelledby="gallery-title"
    onCancel={close}
    onClick={event => { if (event.target === event.currentTarget) close(); }}
    onKeyDown={event => {
      if (event.key === 'ArrowRight') { event.preventDefault(); step(1); }
      if (event.key === 'ArrowLeft') { event.preventDefault(); step(-1); }
    }}>
    <div className={styles.galleryBody}>
      <div className={styles.galleryHeader}>
        <h2 id="gallery-title">{project.title}{project.placeholder && <small className={styles.galleryNotice}>Placeholder artwork</small>}</h2>
        <button type="button" className={styles.iconButton} aria-label="Close gallery" onClick={close} autoFocus><Icon name="close" /></button>
      </div>
      <div className={styles.galleryImage}>
        <Image src={images[index]} alt={project.title + ' image ' + (index + 1)} fill
          sizes="(max-width: 640px) 95vw, 1100px" style={{ objectFit: 'contain' }} priority />
      </div>
      <div className={styles.galleryControls}>
        <button type="button" className={styles.iconButton} onClick={() => step(-1)} aria-label="Previous image" disabled={images.length === 1}>
          <Icon name="chevron" style={{ transform: 'rotate(180deg)' }} />
        </button>
        <span aria-live="polite">{index + 1} / {images.length}</span>
        <button type="button" className={styles.iconButton} onClick={() => step(1)} aria-label="Next image" disabled={images.length === 1}><Icon name="chevron" /></button>
      </div>
    </div>
  </dialog>;
}

export default function ProjectsSection() {
  const mobile = useMedia('(max-width: 640px)');
  const [scope, setScope] = useState('All');
  const [category, setCategory] = useState('All');
  const [query, setQuery] = useState('');
  const [selectedId, setSelectedId] = useState(projects[0].id);
  const [imageIndex, setImageIndex] = useState(0);
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [imageError, setImageError] = useState(false);
  const visible = projects.filter(project => {
    const searchable = [project.title, project.kind, project.description, project.role, ...project.tags, ...(project.relatedWork ?? [])].join(' ').toLowerCase();
    return (scope === 'All' || project.featured) &&
      (category === 'All' || project.category === category) &&
      searchable.includes(query.trim().toLowerCase());
  });
  const selected = visible.find(project => project.id === selectedId) ?? visible[0];
  const images = selected ? [selected.image, ...(selected.gallery ?? [])] : [];
  const resetPreview = () => { setImageIndex(0); setImageError(false); setGalleryOpen(false); };
  const selectProject = (id: string) => { setSelectedId(id); resetPreview(); };
  const changeScope = (value: string) => {
    setScope(value); setCategory('All'); setQuery(''); resetPreview();
  };
  const clearSearch = () => { setQuery(''); setCategory('All'); setScope('All'); resetPreview(); };
  const navigateIndex = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    let next = index;
    if (event.key === 'ArrowDown' || event.key === 'ArrowRight') next = (index + 1) % visible.length;
    else if (event.key === 'ArrowUp' || event.key === 'ArrowLeft') next = (index - 1 + visible.length) % visible.length;
    else if (event.key === 'Home') next = 0;
    else if (event.key === 'End') next = visible.length - 1;
    else return;
    event.preventDefault();
    selectProject(visible[next].id);
    document.getElementById('project-tab-' + visible[next].id)?.focus();
  };

  return <section id="projects" className={'container ' + styles.projects}>
    <div className={styles.toolbar}>
      <h2>Projects</h2>
      <div className={styles.filters} aria-label="Project collection">
        {['Selected', 'All'].map(value => <button key={value} type="button"
          aria-pressed={scope === value} onClick={() => changeScope(value)}>{value === 'All' ? 'All ' + projects.length : value}</button>)}
      </div>
    </div>

    <div className={styles.workspace}>
      <div className={styles.indexColumn}>
        <div className={styles.indexTools}>
          <label className="visually-hidden" htmlFor="project-search">Search projects</label>
          <input id="project-search" type="search" value={query} placeholder="Project or technology"
            onChange={event => { setQuery(event.target.value); setScope('All'); resetPreview(); }} />
          <label className="visually-hidden" htmlFor="project-category">Project category</label>
          <select id="project-category" value={category} onChange={event => { setCategory(event.target.value); setScope('All'); resetPreview(); }}>
            <option value="All">All categories</option>
            {categories.map(value => <option key={value} value={value}>{value}</option>)}
          </select>
        </div>
        <p className={styles.resultCount} role="status">{visible.length} of {projects.length} projects</p>
        <div className={styles.projectIndex} role="tablist" aria-label="Project index" aria-orientation={mobile ? 'horizontal' : 'vertical'}>
          {visible.map((project, index) => <button key={project.id} type="button" role="tab"
            id={'project-tab-' + project.id}
            aria-selected={selected?.id === project.id}
            aria-controls={'project-panel-' + project.id}
            tabIndex={selected?.id === project.id ? 0 : -1}
            onClick={() => selectProject(project.id)}
            onKeyDown={event => navigateIndex(event, index)}
            className={styles.projectRow}>
            <span><strong>{project.title}</strong><small>{project.kind}</small></span>
            <Icon name="chevron" size={17} />
          </button>)}
        </div>
        <a href="https://github.com/filipkorazija" target="_blank" rel="noopener noreferrer" className={styles.repositoryLink}>More on GitHub</a>
      </div>

      {selected ? <article id={'project-panel-' + selected.id} role="tabpanel"
        aria-labelledby={'project-tab-' + selected.id} className={styles.inspector} tabIndex={0}>
        <div className={styles.previewTop}>
          <span>{selected.imageLabel}</span>
          <button type="button" onClick={() => setGalleryOpen(true)} aria-label={'Open ' + selected.title + ' gallery'}>Enlarge <Icon name="expand" size={15} /></button>
        </div>
        <div className={styles.preview} style={{ backgroundColor: selected.background }}>
          <div key={selected.id + '-' + imageIndex} className={styles.imageLayer}>
            <Image src={images[imageIndex]} alt={imageIndex === 0 ? selected.imageLabel + ' for ' + selected.title : selected.title + ' gallery image ' + imageIndex}
              fill sizes="(max-width: 640px) 90vw, (max-width: 1000px) 65vw, 900px"
              style={{ objectFit: 'contain' }} priority={selected.id === projects[0].id && imageIndex === 0}
              onError={() => setImageError(true)} />
          </div>
          {imageError && <div className={styles.imageError}>Preview unavailable.<a className="text-link" href={images[imageIndex]} target="_blank" rel="noopener noreferrer">Open the original image</a></div>}
        </div>
        {images.length > 1 && <div className={styles.thumbnails} aria-label={selected.title + ' images'}>
          {images.map((src, index) => <button key={src} type="button"
            aria-label={'Show ' + selected.title + ' image ' + (index + 1)}
            aria-pressed={imageIndex === index}
            onClick={() => { setImageIndex(index); setImageError(false); }}>
            <Image src={src} alt="" fill sizes="80px" style={{ objectFit: 'cover' }} />
          </button>)}
          <span>{imageIndex + 1} / {images.length}</span>
        </div>}
        <div className={styles.projectDetails} key={selected.id}>
          <div className={styles.detailHeading}><h3>{selected.title}</h3><span>{selected.role}</span></div>
          <p className={styles.projectStatus}>{selected.status}</p>
          <p>{selected.description}</p>
          {selected.highlights && <ul className={styles.engineeringNotes}>{selected.highlights.map(note => <li key={note}>{note}</li>)}</ul>}
          {selected.relatedWork && <div className={styles.relatedWork}><h4>Related work</h4><ul>{selected.relatedWork.map(note => <li key={note}>{note}</li>)}</ul></div>}
          <div className={styles.projectLinks}>
            <button type="button" onClick={() => setGalleryOpen(true)}>{selected.placeholder ? 'View artwork' : 'Open gallery'}</button>
            {selected.links?.map(link => <a key={link.url} href={link.url} target="_blank" rel="noopener noreferrer">{link.label}</a>)}
            <span className={styles.technology}>{selected.tags.join(' / ')}</span>
          </div>
        </div>
      </article> : <div className={styles.emptyState}><h3>No matching projects</h3><p>Try a project name, technology, or a different category.</p><button type="button" onClick={clearSearch}>Clear search and filters</button></div>}
    </div>
    {galleryOpen && selected && <Gallery key={selected.id} project={selected} initialImage={imageIndex} close={() => setGalleryOpen(false)} />}
  </section>;
}
