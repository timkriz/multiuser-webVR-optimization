# Multiuser WebVR optimization experiments

Repozitorij vsebuje eksperimentalni del diplomske naloge z naslovom "Večuporabniške spletne aplikacije v navidezni resničnosti". Raziskovana je navidezna resničnost, ki temelji na spletnih tehnologijah (WebVR) v kontekstu večuporabniških interaktivnih okoljih na primeru interaktivnega portfolia. Naslovijo se vplivi kompleksne geometrije, števila klicev za izris na grafični procesor, vrste senčenja in omrežnearhitekture aplikacije knjižnice A-Frame/ Three.js na več napravah (mobilnih, računalniku, očalih za navidezno resničnost). 

Podstrani za izvedbo testiranja "ozkih grl":
1. Optimizacija geometrije modela:
      * 3D model s 75k trikotniki
      * 3D model z 862 trikotniki
2. Optimizacija števila klicev:
      * scena s 1000 objekti po 12 trikotnikov
      * scena z 1 objektom z 12000 trikotniki
3. Optimizacija osvetljevanja scene:
      * scena z _THREE.MeshStandardMaterial_ s PBR senčenjem
      * scena z zapečenimi teksturami in _THREE.MeshBasicMaterial_
4. Optimizacija omrežne arhitekture:
      * scena z socket.io WebSockets API
      * scena z WebRTC arhitekturo
      
Implementacija socket.io in WebRTC z [networked-aframe](https://github.com/networked-aframe/networked-aframe).

<p align="center"><img src="https://github.com/timkriz/multiuser-webVR-optimization/blob/master/Artboard%201.png" width="600"></p>

<p align="center"><img src="https://github.com/timkriz/multiuser-webVR-optimization/blob/master/popravljen.png" width="300"></p>
     
## Namestitev

`$ git clone https://github.com/timkriz/multiuser-webVR-optimization.git`

```
npm install
npm start
```

`https://localhost:8080`

## Gostovana aplikacija

https://lively-ablaze-flute.glitch.me
