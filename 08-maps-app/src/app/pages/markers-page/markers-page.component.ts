import { AfterContentInit, Component, ElementRef, signal, viewChild } from '@angular/core';
import { v4 as UUIDV4 } from 'uuid';
import maplibregl, { LngLatLike } from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import { JsonPipe } from '@angular/common';

interface Marker {
  id:string,
  maplibreMarker: maplibregl.Marker
}

@Component({
  selector: 'app-markers-page',
  imports: [ JsonPipe ],
  templateUrl: './markers-page.component.html',
})
export class MarkersPageComponent implements AfterContentInit {

  divElement = viewChild<ElementRef>('map');
  map = signal<maplibregl.Map | null>(null);
  markers = signal<Marker[]>([]);

  async ngAfterContentInit() {

    if ( !this.divElement()?.nativeElement ) return;
    const element = this.divElement()!.nativeElement;

    const map = new maplibregl.Map({
      container: element, // container id
      style: 'https://api.maptiler.com/maps/streets/style.json?key=get_your_own_OpIi9ZULNHzrESv6T2vL', // style URL
      center: [-75.56718845041755, 6.25264299575948], // starting position [lng, lat]
      zoom: 11 // starting zoom
    });

    // const marker = new maplibregl.Marker({
    //   draggable: false,
    //   color: '#000'
    // })
    // .setLngLat([-75.56718845041755, 6.25264299575948])
    // .addTo(map);

    // marker.on('dragend', (event) => {
    //   console.log(event);
    // });

    map.addControl(new maplibregl.FullscreenControl());
    map.addControl(new maplibregl.NavigationControl());

    this.mapListeners(map);
  }

  mapListeners(map: maplibregl.Map) {

    map.on('click', (event) => this.mapClick(event));

    this.map.set(map);
  }

  mapClick(event: maplibregl.MapMouseEvent) {

    if ( !this.map() ) return;

    const map = this.map()!;

    const color = '#xxxxxx'.replace(/x/g, (y) =>
      ((Math.random() * 16) | 0).toString(16)
    );

    const coords = event.lngLat;

    const maplibreMarker = new maplibregl.Marker({
      color: color
    })
    .setLngLat(coords)
    .addTo(map);

    const newMarker: Marker = {
      id: UUIDV4(),
      maplibreMarker: maplibreMarker
    }

    // this.markers.set([newMarker, ...this.markers()]);
    this.markers.update(markers => [newMarker, ...markers]);

  }

  flyToMarker( lngLat: LngLatLike ) {
    if ( !this.map() ) return;

    this.map()?.flyTo({
      center: lngLat
    });

  };

  deleteMarker(marker: Marker) {
    if (!this.map()) return;
    const map = this.map()!;

    marker.maplibreMarker.remove();

    this.markers.set(this.markers().filter((m) => m.id !== marker.id));
  }

}
