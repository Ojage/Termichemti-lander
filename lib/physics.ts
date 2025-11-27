import * as Matter from 'matter-js'

export interface WiFiObject {
  body: Matter.Body
  type: 'wifi' | 'device' | 'packet' | 'node'
  id: string
  color: string
  size: number
}

export class WiFiPhysicsEngine {
  private engine: Matter.Engine
  private render: Matter.Render | null = null
  private runner: Matter.Runner | null = null
  private objects: WiFiObject[] = []
  private mousePosition = { x: 0, y: 0 }
  private mouseForce = 0.0001
  private canvas: HTMLCanvasElement
  private ctx: CanvasRenderingContext2D

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas
    const ctx = canvas.getContext('2d')
    if (!ctx) throw new Error('Could not get canvas context')
    this.ctx = ctx

    // Create physics engine
    this.engine = Matter.Engine.create()
    this.engine.world.gravity.y = 0 // Zero gravity!
    this.engine.world.gravity.x = 0

    // Set up canvas size
    this.resize()
    window.addEventListener('resize', () => this.resize())

    // Initialize objects
    this.createObjects()
  }

  private resize() {
    const dpr = window.devicePixelRatio || 1
    const rect = this.canvas.getBoundingClientRect()
    this.canvas.width = rect.width * dpr
    this.canvas.height = rect.height * dpr
    this.ctx.scale(dpr, dpr)
    this.canvas.style.width = `${rect.width}px`
    this.canvas.style.height = `${rect.height}px`
  }

  private createObjects() {
    const width = this.canvas.width / (window.devicePixelRatio || 1)
    const height = this.canvas.height / (window.devicePixelRatio || 1)

    // Create Wi-Fi symbols
    for (let i = 0; i < 8; i++) {
      const x = Math.random() * width
      const y = Math.random() * height
      const size = 30 + Math.random() * 20
      const body = Matter.Bodies.circle(x, y, size, {
        restitution: 0.8,
        frictionAir: 0.01,
        density: 0.001,
      })
      Matter.World.add(this.engine.world, body)
      this.objects.push({
        body,
        type: 'wifi',
        id: `wifi-${i}`,
        color: i % 2 === 0 ? '#00f0ff' : '#8b5cf6',
        size,
      })
    }

    // Create device shapes (rectangles)
    for (let i = 0; i < 4; i++) {
      const x = Math.random() * width
      const y = Math.random() * height
      const w = 40 + Math.random() * 30
      const h = 25 + Math.random() * 20
      const body = Matter.Bodies.rectangle(x, y, w, h, {
        restitution: 0.7,
        frictionAir: 0.01,
        density: 0.001,
      })
      Matter.World.add(this.engine.world, body)
      this.objects.push({
        body,
        type: 'device',
        id: `device-${i}`,
        color: '#00ff88',
        size: Math.max(w, h),
      })
    }

    // Create packet orbs (small circles)
    for (let i = 0; i < 12; i++) {
      const x = Math.random() * width
      const y = Math.random() * height
      const size = 8 + Math.random() * 8
      const body = Matter.Bodies.circle(x, y, size, {
        restitution: 0.9,
        frictionAir: 0.02,
        density: 0.0005,
      })
      Matter.World.add(this.engine.world, body)
      this.objects.push({
        body,
        type: 'packet',
        id: `packet-${i}`,
        color: '#ffa500',
        size,
      })
    }

    // Create network nodes
    for (let i = 0; i < 6; i++) {
      const x = Math.random() * width
      const y = Math.random() * height
      const size = 12 + Math.random() * 8
      const body = Matter.Bodies.circle(x, y, size, {
        restitution: 0.85,
        frictionAir: 0.015,
        density: 0.001,
      })
      Matter.World.add(this.engine.world, body)
      this.objects.push({
        body,
        type: 'node',
        id: `node-${i}`,
        color: '#00f0ff',
        size,
      })
    }

    // Add constraints to create connections between nearby nodes
    for (let i = 0; i < this.objects.length; i++) {
      for (let j = i + 1; j < this.objects.length; j++) {
        const obj1 = this.objects[i]
        const obj2 = this.objects[j]
        const distance = Matter.Vector.magnitude(
          Matter.Vector.sub(obj1.body.position, obj2.body.position)
        )
        if (distance < 150 && Math.random() > 0.7) {
          const constraint = Matter.Constraint.create({
            bodyA: obj1.body,
            bodyB: obj2.body,
            length: distance,
            stiffness: 0.1,
            render: { visible: false },
          })
          Matter.World.add(this.engine.world, constraint)
        }
      }
    }
  }

  public setMousePosition(x: number, y: number) {
    const dpr = window.devicePixelRatio || 1
    this.mousePosition = { x: x * dpr, y: y * dpr }
  }

  public applyMouseForce() {
    this.objects.forEach((obj) => {
      const dx = obj.body.position.x - this.mousePosition.x
      const dy = obj.body.position.y - this.mousePosition.y
      const distance = Math.sqrt(dx * dx + dy * dy)
      const maxDistance = 200

      if (distance < maxDistance && distance > 0) {
        const force = ((maxDistance - distance) / maxDistance) * this.mouseForce
        const angle = Math.atan2(dy, dx)
        Matter.Body.applyForce(obj.body, obj.body.position, {
          x: Math.cos(angle) * force * distance,
          y: Math.sin(angle) * force * distance,
        })
      }
    })
  }

  public handleClick(x: number, y: number): WiFiObject | null {
    const dpr = window.devicePixelRatio || 1
    const clickX = x * dpr
    const clickY = y * dpr

    for (const obj of this.objects) {
      const dx = obj.body.position.x - clickX
      const dy = obj.body.position.y - clickY
      const distance = Math.sqrt(dx * dx + dy * dy)

      if (distance < obj.size * 1.5) {
        // Apply burst force
        const angle = Math.atan2(dy, dx)
        Matter.Body.applyForce(obj.body, obj.body.position, {
          x: Math.cos(angle) * -0.01,
          y: Math.sin(angle) * -0.01,
        })
        return obj
      }
    }
    return null
  }

  public update() {
    this.applyMouseForce()
    Matter.Engine.update(this.engine)
    this.draw()
  }

  private draw() {
    const width = this.canvas.width / (window.devicePixelRatio || 1)
    const height = this.canvas.height / (window.devicePixelRatio || 1)

    // Clear canvas with slight fade for trail effect
    this.ctx.fillStyle = 'rgba(10, 14, 39, 0.1)'
    this.ctx.fillRect(0, 0, width, height)

    // Draw connections
    this.ctx.strokeStyle = 'rgba(0, 240, 255, 0.2)'
    this.ctx.lineWidth = 1
    for (const constraint of this.engine.world.constraints) {
      if (constraint.bodyA && constraint.bodyB) {
        this.ctx.beginPath()
        this.ctx.moveTo(constraint.bodyA.position.x, constraint.bodyA.position.y)
        this.ctx.lineTo(constraint.bodyB.position.x, constraint.bodyB.position.y)
        this.ctx.stroke()
      }
    }

    // Draw objects
    this.objects.forEach((obj) => {
      this.ctx.save()
      this.ctx.translate(obj.body.position.x, obj.body.position.y)
      this.ctx.rotate(obj.body.angle)

      if (obj.type === 'wifi') {
        this.drawWiFiIcon(obj)
      } else if (obj.type === 'device') {
        this.drawDevice(obj)
      } else if (obj.type === 'packet') {
        this.drawPacket(obj)
      } else if (obj.type === 'node') {
        this.drawNode(obj)
      }

      this.ctx.restore()
    })
  }

  private drawWiFiIcon(obj: WiFiObject) {
    const size = obj.size
    this.ctx.strokeStyle = obj.color
    this.ctx.lineWidth = 2
    this.ctx.globalAlpha = 0.8

    // Draw Wi-Fi signal arcs
    for (let i = 0; i < 3; i++) {
      this.ctx.beginPath()
      const radius = size * (0.3 + i * 0.3)
      this.ctx.arc(0, size * 0.3, radius, Math.PI * 0.3, Math.PI * 0.7, false)
      this.ctx.stroke()
    }

    // Center dot
    this.ctx.fillStyle = obj.color
    this.ctx.beginPath()
    this.ctx.arc(0, size * 0.3, 3, 0, Math.PI * 2)
    this.ctx.fill()
  }

  private drawDevice(obj: WiFiObject) {
    const w = obj.size * 0.8
    const h = obj.size * 0.5
    this.ctx.fillStyle = obj.color
    this.ctx.globalAlpha = 0.6
    this.ctx.fillRect(-w / 2, -h / 2, w, h)
    this.ctx.strokeStyle = obj.color
    this.ctx.lineWidth = 1
    this.ctx.strokeRect(-w / 2, -h / 2, w, h)
  }

  private drawPacket(obj: WiFiObject) {
    this.ctx.fillStyle = obj.color
    this.ctx.globalAlpha = 0.7
    this.ctx.beginPath()
    this.ctx.arc(0, 0, obj.size, 0, Math.PI * 2)
    this.ctx.fill()

    // Glow effect
    const gradient = this.ctx.createRadialGradient(0, 0, 0, 0, 0, obj.size * 2)
    gradient.addColorStop(0, obj.color)
    gradient.addColorStop(1, 'transparent')
    this.ctx.fillStyle = gradient
    this.ctx.globalAlpha = 0.3
    this.ctx.fillRect(-obj.size * 2, -obj.size * 2, obj.size * 4, obj.size * 4)
  }

  private drawNode(obj: WiFiObject) {
    this.ctx.fillStyle = obj.color
    this.ctx.globalAlpha = 0.8
    this.ctx.beginPath()
    this.ctx.arc(0, 0, obj.size, 0, Math.PI * 2)
    this.ctx.fill()

    // Outer ring
    this.ctx.strokeStyle = obj.color
    this.ctx.lineWidth = 1
    this.ctx.globalAlpha = 0.4
    this.ctx.beginPath()
    this.ctx.arc(0, 0, obj.size * 1.5, 0, Math.PI * 2)
    this.ctx.stroke()
  }

  public destroy() {
    if (this.runner) {
      Matter.Runner.stop(this.runner)
    }
    Matter.Engine.clear(this.engine)
  }

  public getObjects(): WiFiObject[] {
    return this.objects
  }

  public setInitialVelocities() {
    this.objects.forEach((obj) => {
      Matter.Body.setVelocity(obj.body, {
        x: (Math.random() - 0.5) * 2,
        y: (Math.random() - 0.5) * 2,
      })
    })
  }
}

