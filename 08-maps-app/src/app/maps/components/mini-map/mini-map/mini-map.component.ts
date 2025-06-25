import { AfterContentInit, Component, ElementRef, input, signal, viewChild } from '@angular/core';

import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import { HouseProperty } from '../../../../interfaces/house-property.interface';

/**
 * width: 100%
 * height: 260
 */

@Component({
  selector: 'app-mini-map',
  imports: [],
  templateUrl: './mini-map.component.html',
  styles: `
    div {
      width: 100%;
      height: 260px;
    }
  `
})
export class MiniMapComponent implements AfterContentInit {

  divElement = viewChild<ElementRef>('map');
  lngLat = input.required<{lng: number, lat: number}>();
  zoom = input<number>(14);

  ngAfterContentInit(): void {

    if ( !this.divElement()?.nativeElement ) return;
    const element = this.divElement()!.nativeElement;

    const map = new maplibregl.Map({
      container: element, // container id
      style: 'https://api.maptiler.com/maps/streets/style.json?key=get_your_own_OpIi9ZULNHzrESv6T2vL', // style URL
      center: this.lngLat(), // starting position [lng, lat]
      zoom: this.zoom(), // starting zoom,
      interactive: false,
      pitch: 30
    });

    const marker = new maplibregl.Marker()
        .setLngLat(this.lngLat())
        .addTo(map)

  }

}
