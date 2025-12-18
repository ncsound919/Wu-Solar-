import './FieldTripGuides.css'

interface FieldTrip {
  id: string
  title: string
  location: string
  duration: string
  gradeLevel: string
  wuConnection: string
  objectives: string[]
  activities: string[]
  materials: string[]
  icon: string
  color: string
}

const fieldTrips: FieldTrip[] = [
  {
    id: 'planetarium',
    title: 'Planetarium Visit: Orbital Mechanics',
    location: 'Local Planetarium or Science Center',
    duration: '3-4 hours',
    gradeLevel: 'Grades 6-12',
    wuConnection: 'RZA as the Sun - Gravitational Coherence',
    icon: '🔭',
    color: '#FDB813',
    objectives: [
      'Understand how gravity keeps planets in orbit',
      'Visualize the scale of the solar system',
      'Connect gravitational coherence to leadership dynamics',
      'Identify the role of the Sun in system stability'
    ],
    activities: [
      'Watch a planetarium show about the solar system',
      'Use interactive exhibits to adjust gravitational forces',
      'Sketch the Wu-Tang Solar System with member positions',
      'Discuss: "Who is the Sun in your life? Who keeps your system stable?"'
    ],
    materials: [
      'Wu-Tang Solar System worksheet',
      'Sketchbook for planetary mapping',
      'Gravity simulation app (optional)',
      'Discussion prompts handout'
    ]
  },
  {
    id: 'stargazing',
    title: 'Night Sky Stargazing: Celestial Navigation',
    location: 'Local Park or Observatory (away from city lights)',
    duration: '2-3 hours (evening)',
    gradeLevel: 'Grades 5-12',
    wuConnection: 'Venus (Method Man) - Brightest Object in the Sky',
    icon: '⭐',
    color: '#FFC649',
    objectives: [
      'Locate planets and bright stars in the night sky',
      'Understand why Venus is the brightest planet',
      'Connect visibility to brand building and presence',
      'Learn basic celestial navigation'
    ],
    activities: [
      'Identify Venus, Mars, Jupiter, and Saturn if visible',
      'Discuss why some celestial bodies are more visible than others',
      'Use a star map app to locate constellations',
      'Reflect: "How do you become the brightest star in your field?"'
    ],
    materials: [
      'Star chart or sky map app',
      'Flashlights with red filters',
      'Blankets for ground viewing',
      'Binoculars or telescope (optional)',
      'Hot beverages for cold nights'
    ]
  },
  {
    id: 'geology',
    title: 'Rock & Mineral Exploration: Density Lesson',
    location: 'Natural History Museum or Geology Site',
    duration: '2-3 hours',
    gradeLevel: 'Grades 4-10',
    wuConnection: 'Mercury (GZA) - Iron Core Density',
    icon: '🪨',
    color: '#8C7853',
    objectives: [
      'Compare the density of different rocks and minerals',
      'Understand why Mercury has such a large iron core',
      'Connect physical density to lyrical density',
      'Distinguish between dense content and atmospheric filler'
    ],
    activities: [
      'Hold and compare iron ore, pumice, and other rocks',
      'Weigh equal-sized samples to compare density',
      'Analyze song lyrics for "density" vs "atmosphere"',
      'Create: "Write a dense 4-bar verse (no filler words)"'
    ],
    materials: [
      'Rock and mineral samples',
      'Scale for weighing samples',
      'Lyric analysis worksheet',
      'GZA vs ODB comparison sheet'
    ]
  },
  {
    id: 'weather',
    title: 'Weather Station Visit: Atmospheric Science',
    location: 'Local Weather Station or University Meteorology Dept',
    duration: '2-3 hours',
    gradeLevel: 'Grades 6-12',
    wuConnection: 'Neptune (ODB) - Supersonic Winds',
    icon: '🌪️',
    color: '#4169E1',
    objectives: [
      'Understand how planetary atmospheres create weather',
      'Learn about wind speeds on different planets',
      'Connect chaotic weather to creative chaos',
      'Explore the balance between structure and unpredictability'
    ],
    activities: [
      'Tour weather monitoring equipment',
      'Compare Earth wind speeds to Neptune\'s 1,500 mph winds',
      'Experiment with wind tunnel or fan demonstrations',
      'Discuss: "Is chaos always bad? When is unpredictability valuable?"'
    ],
    materials: [
      'Planetary wind speed comparison chart',
      'Anemometer for measuring wind',
      'Creativity vs Structure worksheet',
      'ODB lyrics for chaos analysis'
    ]
  },
  {
    id: 'volcano',
    title: 'Volcanic Landscape Exploration: Scars & Beauty',
    location: 'Volcanic Park, Lava Beds, or Geology Museum',
    duration: 'Half-day to full-day',
    gradeLevel: 'Grades 6-12',
    wuConnection: 'Mars (Ghostface Killah) - Scarred Landscapes',
    icon: '🌋',
    color: '#CD5C5C',
    objectives: [
      'Understand how volcanic activity shapes planetary surfaces',
      'Learn why Mars has the largest volcano in the solar system',
      'Connect physical scars to emotional vulnerability in art',
      'Explore how exposure creates beauty'
    ],
    activities: [
      'Examine volcanic rock formations and lava flows',
      'Study Mars surface images showing Olympus Mons',
      'Create art from volcanic materials (if safe)',
      'Write: "A personal scar that became a strength"'
    ],
    materials: [
      'Mars surface photographs',
      'Volcanic rock samples',
      'Art supplies for creative expression',
      'Ghostface Killah lyrics about vulnerability'
    ]
  },
  {
    id: 'archive',
    title: 'Archive & Library Visit: Data Preservation',
    location: 'Historical Archive, Library Special Collections',
    duration: '2-3 hours',
    gradeLevel: 'Grades 5-12',
    wuConnection: 'Time Capsule - Entropy & Preservation',
    icon: '📚',
    color: '#4169E1',
    objectives: [
      'Understand how archives preserve history',
      'Learn about different preservation methods',
      'Connect physical preservation to digital backup',
      'Explore the concept of entropy and data loss'
    ],
    activities: [
      'Tour archive storage facilities',
      'Handle (with gloves) historical documents',
      'Compare floppy discs, CDs, and cloud storage',
      'Create: "Your personal time capsule - what would you save?"'
    ],
    materials: [
      'Various storage media examples (floppy disc, CD, USB)',
      'Archival gloves for document handling',
      'Time capsule planning worksheet',
      'Entropy explanation handout'
    ]
  }
]

function FieldTripGuides() {
  return (
    <div className="field-trip-guides">
      <div className="container">
        <header className="module-header">
          <h1>🎒 Field Trip Guides</h1>
          <p className="module-subtitle">
            Take the Wu-Tang Solar System curriculum outdoors with these hands-on learning experiences
          </p>
        </header>

        <section className="intro-section card">
          <h2>Why Field Trips?</h2>
          <p>
            The Wu-Tang Solar System curriculum bridges hip-hop culture with planetary science. 
            These field trips extend that learning beyond the classroom, allowing students to 
            experience scientific concepts firsthand while connecting them to the cultural lessons.
          </p>
          <div className="key-principles">
            <div className="principle">
              <span className="principle-icon">🌍</span>
              <h3>Experiential Learning</h3>
              <p>Touch, see, and feel the concepts rather than just reading about them</p>
            </div>
            <div className="principle">
              <span className="principle-icon">🔗</span>
              <h3>Cultural Connection</h3>
              <p>Every activity links back to Wu-Tang wisdom and systems thinking</p>
            </div>
            <div className="principle">
              <span className="principle-icon">📝</span>
              <h3>Reflection</h3>
              <p>Each trip includes self-reflection questions to internalize lessons</p>
            </div>
          </div>
        </section>

        <section className="trips-section">
          <h2>Available Field Trips</h2>
          <div className="trips-grid">
            {fieldTrips.map((trip) => (
              <div key={trip.id} className="trip-card card" style={{ borderTopColor: trip.color }}>
                <div className="trip-header">
                  <span className="trip-icon" style={{ color: trip.color }}>{trip.icon}</span>
                  <div>
                    <h3>{trip.title}</h3>
                    <p className="trip-wu-connection" style={{ color: trip.color }}>
                      {trip.wuConnection}
                    </p>
                  </div>
                </div>

                <div className="trip-meta">
                  <span>📍 {trip.location}</span>
                  <span>⏱️ {trip.duration}</span>
                  <span>📊 {trip.gradeLevel}</span>
                </div>

                <div className="trip-section">
                  <h4>🎯 Learning Objectives</h4>
                  <ul>
                    {trip.objectives.map((obj, i) => (
                      <li key={i}>{obj}</li>
                    ))}
                  </ul>
                </div>

                <div className="trip-section">
                  <h4>🎮 Activities</h4>
                  <ul>
                    {trip.activities.map((act, i) => (
                      <li key={i}>{act}</li>
                    ))}
                  </ul>
                </div>

                <div className="trip-section">
                  <h4>📦 Materials Needed</h4>
                  <ul>
                    {trip.materials.map((mat, i) => (
                      <li key={i}>{mat}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="tips-section card">
          <h2>📋 General Tips for Educators</h2>
          <div className="tips-grid">
            <div className="tip">
              <h3>Before the Trip</h3>
              <ul>
                <li>Pre-visit the location when possible</li>
                <li>Review the corresponding Wu-Tang module with students</li>
                <li>Prepare all materials and worksheets</li>
                <li>Send permission slips and information to parents</li>
              </ul>
            </div>
            <div className="tip">
              <h3>During the Trip</h3>
              <ul>
                <li>Explicitly connect observations to Wu-Tang lessons</li>
                <li>Encourage questions and curiosity</li>
                <li>Have students take notes or photos</li>
                <li>Allow time for personal reflection</li>
              </ul>
            </div>
            <div className="tip">
              <h3>After the Trip</h3>
              <ul>
                <li>Complete the corresponding module quiz</li>
                <li>Have students share their insights</li>
                <li>Connect the experience to future lessons</li>
                <li>Encourage creative projects based on the trip</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="safety-section card">
          <h2>⚠️ Safety Reminders</h2>
          <ul>
            <li>Always maintain appropriate adult-to-student ratios</li>
            <li>For night sky viewing, choose safe locations and bring adequate lighting</li>
            <li>For geology trips, ensure proper footwear and supervision near formations</li>
            <li>Have emergency contact information readily available</li>
            <li>Check weather conditions before outdoor activities</li>
            <li>Ensure students with allergies or medical conditions are prepared</li>
          </ul>
        </section>
      </div>
    </div>
  )
}

export default FieldTripGuides
