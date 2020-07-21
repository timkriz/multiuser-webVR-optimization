window.addEventListener("DOMContentLoaded", function(){
        var canvas = document.getElementById("renderCanvas"); // Get the canvas element
        var engine = new BABYLON.Engine(canvas, true); // Generate the BABYLON 3D engine

        /******* Add the create scene function ******/
        var createScene = function () { // Create the scene space
                var scene = new BABYLON.Scene(engine);

                // Add a camera to the scene and attach it to the canvas
                camera = new BABYLON.WebVRFreeCamera("WebVRCamera", new BABYLON.Vector3(0 ,0, 0), scene);
                //camera.attachControl(canvas, true);
                scene.onPointerDown = function() {
                        scene.onPointerDown = undefined;
                        camera.attachControl(canvas, true);
                };

                // Add lights to the scene
                var light1 = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(1, 1, 0), scene);
                var light2 = new BABYLON.PointLight("light2", new BABYLON.Vector3(0, 1, -1), scene);
                
                // Default Environment
                var environment = scene.createDefaultEnvironment({
                        enableGroundShadow: true,
                        groundYBias: 2.8
                });
                environment.setMainColor(BABYLON.Color3.FromHexString("#74b9ff"))

                // Add and manipulate meshes in the scene
                var sphere = BABYLON.MeshBuilder.CreateSphere("sphere", {diameter:2}, scene);
                sphere.position = new BABYLON.Vector3(0 , 0, 5);

                // Enable VR, use XR when possible
                var vrHelper = scene.createDefaultVRExperience({
                        createDeviceOrientationCamera: true,
                        useXR: true, // This will enable XR if supported
                        floorMeshes: [environment.ground]
                });
                // Warn if there is no DeviceMotionEvents access
                vrHelper.onAfterEnteringVRObservable.add(() => {
                        if (scene.activeCamera === vrHelper.vrDeviceOrientationCamera) {
                                BABYLON.FreeCameraDeviceOrientationInput.WaitForOrientationChangeAsync(1000)
                                .then(() => {
                                // Successfully received sensor input
                                })
                                .catch(() => {
                                alert(
                                "Device orientation camera is being used but no sensor is found, prompt user to enable in browser settings"
                                );
                                });
                        }
        });

        // Enable XR session only on devices that support XR
        /*const xr = scene.createDefaultXRExperienceAsync();
        if (!xrHelper.baseExperience) {
                // no xr support
                console.log("NO XR SUPPORT!);
            } else {
                // all good, ready to go
            }
        */
        return scene;
        };
        /******* End of the create scene function ******/

        var scene = createScene();

        engine.runRenderLoop(function () {
                if (scene) {
                        scene.render();
                        var fpsLabel = document.getElementById("fpsLabel");
                        fpsLabel.innerHTML = engine.getFps().toFixed() + " fps";
                }
        });


        // Watch for browser/canvas resize events
        window.addEventListener("resize", function () {
                engine.resize();
        });
});
