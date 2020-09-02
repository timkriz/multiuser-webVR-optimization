# Multiuser webVR optimization experiments


A-Frame spletne strani za izvedbo testiranja "ozkih grl":
1. Optimizacija geometrije modela:
      * 3D model s 75k trikotniki
      * 3D model z 862 trikotniki
2. Optimizacija števila klicev:
      * scena s 1000 objekti po 12 trikotnikov
      * scena z 1 objektom z 12000 trikotniki
3. Optimizacija osvetljevanja scene
      * scena z _THREE.MeshStandardMaterial_ s PBR senčenjem
      * scena z zapečenimi teksturami in _THREE.MeshBasicMaterial_
4. Optimizacija omrežne arhitekture 
      * scena z socket.io WebSockets API
      * scena z WebRTC 
     
# Namestitev

`$ git clone https://github.com/libgit2/libgit2`
# Glitch gostovanje
