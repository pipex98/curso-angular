import { AfterContentInit, Component, effect, ElementRef, signal, viewChild } from '@angular/core';
import { DecimalPipe, JsonPipe } from '@angular/common';

import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';

@Component({
  selector: 'app-fullscreen-map-page',
  imports: [ DecimalPipe, JsonPipe ],
  templateUrl: './fullscreen-map-page.component.html',
  styles: `
    div {
      width: 100vw;
      height: calc(100vh - 64px);
    }

    #controls{
      background-color: white;
      padding: 10px;
      border-radius: 5px;
      position: fixed;
      bottom: 40px;
      right: 20px;
      z-index: 9999;
      box-shadow: 0 0 10px 0 rgb(0,0,0,0.1);
      border:1px solid #e2e8f0;
      width:330px;
    }
  `
})
export class FullscreenMapPageComponent implements AfterContentInit {

  divElement = viewChild<ElementRef>('map');
  map = signal<maplibregl.Map | null>(null);

  zoom = signal(1);
  coordinates = signal({
    lng: 0,
    lat: 0
  });

  zoomEffect = effect(() => {
    if ( !this.map() ) return;

    this.map()?.setZoom(this.zoom());
    // this.map()?.zoomTo(this.zoom());
  })

  async ngAfterContentInit() {

    if ( !this.divElement()?.nativeElement ) return;
    const element = this.divElement()!.nativeElement;
    const { lat, lng } = this.coordinates();

    const map = new maplibregl.Map({
      container: element, // container id
      style: 'https://api.maptiler.com/maps/streets/style.json?key=get_your_own_OpIi9ZULNHzrESv6T2vL', // style URL
      center: [lng, lat], // starting position [lng, lat]
      zoom: this.zoom() // starting zoom
    });

    map.addControl(new maplibregl.FullscreenControl());
    map.addControl(new maplibregl.NavigationControl());

    this.mapListeners(map);
  }

  mapListeners( map: maplibregl.Map ) {

    map.on('zoomend', (event) => {
      const newZoom = event.target.getZoom();
      this.zoom.set(newZoom);
    });

    map.on('moveend', () => {
      const center = map.getCenter();
      this.coordinates.set(center);
    });

    map.on('load', () => {
      console.log('Map loaded');

    })

    this.map.set(map);
  }

}
