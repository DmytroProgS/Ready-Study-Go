import React, { useLayoutEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './PageNavigation.css';

export function PageNavigation({ backTo = '/', onBack, onHome, disabled, children }) {
  return (
    <nav className="page-navigation" aria-label="Seitennavigation">
      {onBack
        ? <button type="button" disabled={disabled} onClick={onBack}>← Zurück</button>
        : <Link to={backTo}>← Zurück</Link>}
      {onHome
        ? <button type="button" disabled={disabled} onClick={onHome}>Zur Startseite</button>
        : <Link to="/">Zur Startseite</Link>}
      {children}
    </nav>
  );
}

const pagesWithOwnNavigation = [
  '/deutsch-duell', '/dialogue', '/turn-taking', '/c1/sprechen-dtb/redewendungen',
];

function parentPage(path) {
  if (path === '/word-trainer' || path.startsWith('/grammar/praep/')) return '/grammar';
  if (/^\/homework\/set\/2\/(exercises|words)$/.test(path)) return '/homework/set/2';
  if (path.startsWith('/homework/set/')) return '/homework';
  if (/^\/(b2|c1|homework|self-study|word-trainer)\//.test(path)) {
    return path.slice(0, path.lastIndexOf('/'));
  }
  return '/';
}

export function RouteNavigation() {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const path = pathname.toLowerCase().replace(/\/+$/, '');
  if (!path || pagesWithOwnNavigation.includes(path)) return null;
  return <PageNavigation backTo={parentPage(path)} />;
}
