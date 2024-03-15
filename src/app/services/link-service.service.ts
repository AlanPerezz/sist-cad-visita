import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LinkService {
  private links: Map<number, string> = new Map<number, string>();
  
  constructor() { }
  
  generateLink(visitaId: number): string {
    const link = `https://sistemadecadastrovisita/visita/${visitaId}`;
    this.links.set(visitaId, link);
    return link;
  }

  getLink(visitId: number): string {
    return this.links.get(visitId) || '';
  }
}
