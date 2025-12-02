import fs from 'fs';
import path from 'path';
import { getServiceData, getAllServices } from './get-service-data';

export interface LocalityData {
  slug: string;
  nombre: string;
  zonas: string[];
  coordenadas: {
    latitud: number;
    longitud: number;
  };
}

let cachedLocalityData: LocalityData[] | null = null;

function getLocalityDataFile(): LocalityData[] {
  if (cachedLocalityData) {
    return cachedLocalityData;
  }

  const filePath = path.join(process.cwd(), 'lib', 'data-localities.json');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  cachedLocalityData = JSON.parse(fileContents) as LocalityData[];
  return cachedLocalityData;
}

export function getLocalityData(slug: string): LocalityData | null {
  const localities = getLocalityDataFile();
  return localities.find((l) => l.slug === slug) || null;
}

export function getAllLocalities(): LocalityData[] {
  return getLocalityDataFile();
}

export interface ServiceForLocality {
  nombre: string;
  slug: string;
  icon: string;
  titulo: string;
  descripcion: string;
  serviciosPrincipales: string[];
}

export function getServicesForLocality(localityName: string): ServiceForLocality[] {
  const allServices = getAllServices();
  
  return allServices.map((service) => ({
    nombre: service.serviceName,
    slug: service.slug,
    icon: service.serviceIcon,
    titulo: `${service.serviceName} en ${localityName}`,
    descripcion: service.hero.subtitle.replace(/Zona Norte/g, localityName),
    serviciosPrincipales: service.servicesIncluded.slice(0, 5),
  }));
}

