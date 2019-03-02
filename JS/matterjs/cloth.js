Matter.use(MatterSprings);
var Engine = Matter.Engine,
    Render = Matter.Render,
    World = Matter.World,
    Bodies = Matter.Bodies;

// create an engine
var engine = Engine.create();

// create a renderer
var render = Render.create({
    element: document.body,
    engine: engine
});
var mouse = Mouse.create(render.canvas),
mouseConstraint = MouseConstraint.create(engine, {
    mouse: mouse,
    constraint: {
        stiffness: 0.98,
        render: {
            visible: false
        }
    }
});
// create two boxes and a ground
var obiecte = {
    boxA = Bodies.rectangle(400, 200, 80, 80),
    boxB = Bodies.rectangle(400, 200, 80, 80),
    boxC = Bodies.rectangle(400, 200, 80, 80),

};

var ground = Bodies.rectangle(400, 610, 810, 60, { isStatic: true });
var capuLuUnguru = Bodies.circle(21,21)
var cloth = Composites.softBody(200, 200, 20, 12, 5, 5, false, 8, particleOptions, constraintOptions);
const circle = Bodies.circle(400, 300, 30, {density: 0.005});
World.add(world, circle);

world.plugin.springs = [
  Spring.create({
    bodyA: circle, 
    pointB: {x: 200, y: 200}, 
    stiffness: 0.5, 
    damping: 1
  })
]

// add all of the bodies to the world
World.add(engine.world, [obiecte]);


// run the engine
Engine.run(engine);

// run the renderer
Render.run(render);
