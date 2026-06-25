import { services as defaultServices } from '../data/services';
import { site as defaultSite } from '../data/site';

export interface Service {
  step: number;
  title: string;
  blurb: string;
  icon: string;
}

export interface SiteSettings {
  title: string;
  tagline: string;
}

const PROJECT_ID = '3ps7l39a';
const DATASET = 'production';
const API_VERSION = '2026-06-24';

async function sanityFetch<T>(query: string): Promise<T | null> {
  const encodedQuery = encodeURIComponent(query);
  const url = `https://${PROJECT_ID}.apicdn.sanity.io/v${API_VERSION}/data/query/${DATASET}?query=${encodedQuery}`;
  
  try {
    const response = await fetch(url);
    if (!response.ok) {
      console.warn(`Sanity fetch warning: status ${response.status}. Falling back to default data.`);
      return null;
    }
    const json = await response.json();
    return json.result as T;
  } catch (error) {
    console.warn('Error fetching data from Sanity, falling back to default data:', error);
    return null;
  }
}

export async function getServices(): Promise<Service[]> {
  const query = `*[_type == "service"] | order(step asc) {
    step,
    title,
    blurb,
    icon
  }`;
  
  const data = await sanityFetch<Service[]>(query);
  if (!data || data.length === 0) {
    console.log('Using default hardcoded services.');
    return defaultServices.map(s => ({
      step: s.step,
      title: s.title,
      blurb: s.blurb,
      icon: s.icon
    }));
  }
  return data;
}

export async function getSiteSettings(): Promise<SiteSettings> {
  const query = `*[_type == "siteSettings"][0] {
    title,
    tagline
  }`;
  
  const data = await sanityFetch<SiteSettings>(query);
  return {
    title: data?.title || defaultSite.name,
    tagline: data?.tagline || defaultSite.tagline
  };
}
