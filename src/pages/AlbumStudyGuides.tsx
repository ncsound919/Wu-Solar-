import './AlbumStudyGuides.css'

interface Album {
  id: string
  title: string
  artist: string
  year: number
  planet: string
  planetMember: string
  coverArt: string
  description: string
  themes: string[]
  scientificConnections: string[]
  discussionQuestions: string[]
  keyTracks: {
    title: string
    lesson: string
  }[]
  color: string
}

const albums: Album[] = [
  {
    id: '36-chambers',
    title: 'Enter the Wu-Tang (36 Chambers)',
    artist: 'Wu-Tang Clan',
    year: 1993,
    planet: 'The Solar System',
    planetMember: 'The Clan',
    coverArt: '☯',
    color: '#FDB813',
    description: 'The debut album that created the "Big Bang" of Wu-Tang - establishing the solar system itself. This album demonstrates how a strong gravitational center (RZA\'s production) can hold diverse talents in stable orbits.',
    themes: [
      'System formation and unity',
      'Individual strength within collective power',
      'Gravitational coherence in leadership',
      'The 36 Chambers as orbital paths'
    ],
    scientificConnections: [
      'Solar system formation from a nebula',
      'Gravitational attraction creating stable orbits',
      'The Sun as the center holding everything together',
      'Synergy: Individual Strength × System Integration × Coherence'
    ],
    discussionQuestions: [
      'How does RZA\'s production style create "gravitational coherence" across all tracks?',
      'What makes each member distinct yet part of the same system?',
      'How is the album structured like a solar system with different "zones"?',
      'What would happen to this album if one member was removed?'
    ],
    keyTracks: [
      { title: 'Bring Da Ruckus', lesson: 'System initialization - introducing the gravitational forces' },
      { title: 'C.R.E.A.M.', lesson: 'Survival and energy exchange in a system' },
      { title: 'Method Man', lesson: 'Individual orbit within the collective' },
      { title: 'Protect Ya Neck', lesson: 'Defensive coherence - the system protecting itself' }
    ]
  },
  {
    id: 'liquid-swords',
    title: 'Liquid Swords',
    artist: 'GZA',
    year: 1995,
    planet: 'Mercury',
    planetMember: 'GZA',
    coverArt: '☿',
    color: '#8C7853',
    description: 'The densest Wu-Tang solo album - like Mercury\'s iron core. Liquid Swords strips away all filler, leaving pure lyrical metal. Every word carries weight, every bar is essential.',
    themes: [
      'Lyrical density over atmospheric filler',
      'Scientific precision in wordplay',
      'Knowledge as power',
      'The Genius as closest to the Sun (truth)'
    ],
    scientificConnections: [
      'Mercury\'s massive iron core (75% of the planet)',
      'Stripped atmosphere - no filler, just core',
      'Closest to the Sun - maximum clarity',
      'Dense, compact, high-value per unit'
    ],
    discussionQuestions: [
      'How does GZA achieve lyrical density? Count the filler words per verse.',
      'Why is this album compared to Mercury\'s iron core?',
      'What makes "dense" writing more valuable than "atmospheric" writing?',
      'How can you apply "density" to your own communication?'
    ],
    keyTracks: [
      { title: 'Liquid Swords', lesson: 'The title track demonstrates stripped-down precision' },
      { title: '4th Chamber', lesson: 'Four distinct dense flows in one track' },
      { title: 'Labels', lesson: 'Industry analysis with zero filler' },
      { title: 'Shadowboxin\'', lesson: 'Method Man adds atmospheric contrast to GZA\'s density' }
    ]
  },
  {
    id: 'return-36',
    title: 'Return to the 36 Chambers: The Dirty Version',
    artist: 'Ol\' Dirty Bastard',
    year: 1995,
    planet: 'Neptune',
    planetMember: 'ODB',
    coverArt: '♆',
    color: '#4169E1',
    description: 'Pure atmospheric chaos - like Neptune\'s 1,500 mph winds. ODB\'s debut is the opposite of density: unpredictable, high-energy, and completely unstructured. No father to his style.',
    themes: [
      'Chaos as creative force',
      'Unpredictability as authenticity',
      'Breaking all conventions',
      'The value of "atmospheric" over "dense"'
    ],
    scientificConnections: [
      'Neptune\'s supersonic winds (1,500 mph)',
      'Chaotic, unpredictable weather systems',
      'Farthest from the Sun - least conventional',
      'High energy, low structure'
    ],
    discussionQuestions: [
      'How does ODB\'s chaos serve the Wu-Tang system?',
      'What would happen if every member had this style?',
      'When is chaos more valuable than precision?',
      'How does unpredictability prevent stagnation?'
    ],
    keyTracks: [
      { title: 'Shimmy Shimmy Ya', lesson: 'Structured chaos - catchy yet unpredictable' },
      { title: 'Brooklyn Zoo', lesson: 'Pure atmospheric energy' },
      { title: 'Raw Hide', lesson: 'Supersonic flow, no rules' },
      { title: 'Cuttin\' Headz', lesson: 'Vocal chaos over chaotic production' }
    ]
  },
  {
    id: 'tical',
    title: 'Tical',
    artist: 'Method Man',
    year: 1994,
    planet: 'Venus',
    planetMember: 'Method Man',
    coverArt: '♀',
    color: '#FFC649',
    description: 'The brightest Wu-Tang solo debut - like Venus in the night sky. Method Man\'s charisma creates a greenhouse effect that traps attention. This album made him the most visible member.',
    themes: [
      'Brand atmosphere building',
      'Charisma as gravitational pull',
      'Visibility and star power',
      'The greenhouse effect of attention'
    ],
    scientificConnections: [
      'Venus is the brightest object in the night sky (after Moon)',
      'Thick atmosphere traps heat - greenhouse effect',
      'Method Man\'s charisma traps attention similarly',
      'High visibility despite not being closest to the Sun'
    ],
    discussionQuestions: [
      'How did Method Man build his "atmosphere" on this album?',
      'What makes someone visible vs invisible in their field?',
      'How does mystique (like Venus\'s clouds) increase intrigue?',
      'Is visibility more important than substance?'
    ],
    keyTracks: [
      { title: 'Bring the Pain', lesson: 'Charisma that commands attention' },
      { title: 'Release Yo\' Delf', lesson: 'Building brand through hooks' },
      { title: 'All I Need', lesson: 'Mainstream visibility - the brightest appearance' },
      { title: 'Mr. Sandman', lesson: 'Persona building through style' }
    ]
  },
  {
    id: 'cuban-linx',
    title: 'Only Built 4 Cuban Linx...',
    artist: 'Raekwon',
    year: 1995,
    planet: 'Earth',
    planetMember: 'Raekwon',
    coverArt: '🌍',
    color: '#4A90E2',
    description: 'The "Purple Tape" created a habitable narrative ecosystem - like Earth. Raekwon built a complete world with characters, storylines, and environments where listeners could live.',
    themes: [
      'World-building and narrative ecosystems',
      'Creating habitable creative environments',
      'The Chef metaphor - providing sustenance',
      'Complex storytelling as life support'
    ],
    scientificConnections: [
      'Earth as the only known habitable planet',
      'Complex ecosystems supporting diverse life',
      'Atmosphere that sustains rather than destroys',
      'Balance of elements creating stability'
    ],
    discussionQuestions: [
      'How does Raekwon create a "habitable" world for listeners?',
      'What makes a narrative ecosystem sustainable?',
      'How does the Chef metaphor connect to providing sustenance?',
      'Why is this album called the "Purple Tape"?'
    ],
    keyTracks: [
      { title: 'Criminology', lesson: 'Building a criminal ecosystem with Ghostface' },
      { title: 'Ice Cream', lesson: 'Street economics as ecology' },
      { title: 'Incarcerated Scarfaces', lesson: 'Consequences within the system' },
      { title: 'Glaciers of Ice', lesson: 'Environmental storytelling' }
    ]
  },
  {
    id: 'ironman',
    title: 'Ironman',
    artist: 'Ghostface Killah',
    year: 1996,
    planet: 'Mars',
    planetMember: 'Ghostface Killah',
    coverArt: '♂',
    color: '#CD5C5C',
    description: 'A vulnerable, emotionally exposed album - like Mars without its magnetic shield. Ghostface dropped his guard and let the solar wind of emotion scar his creative landscape, creating beautiful rawness.',
    themes: [
      'Vulnerability as creative strength',
      'Emotional exposure and rawness',
      'Iron oxide (rust) as the Ironman persona',
      'Beautiful scars from dropped shields'
    ],
    scientificConnections: [
      'Mars lost its magnetic shield billions of years ago',
      'Solar wind stripped its atmosphere',
      'Surface shows scarred volcanic landscapes',
      'Iron oxide (rust) gives Mars its red color'
    ],
    discussionQuestions: [
      'How does emotional vulnerability create powerful art?',
      'What "shields" do we put up that prevent authentic expression?',
      'How do Ghostface\'s "scars" make his storytelling more compelling?',
      'When should you protect yourself vs expose yourself?'
    ],
    keyTracks: [
      { title: 'All That I Got Is You', lesson: 'Vulnerability creating the most memorable track' },
      { title: 'Iron Maiden', lesson: 'The Ironman/Mars persona' },
      { title: 'Assassination Day', lesson: 'Emotional intensity without shields' },
      { title: 'Camay', lesson: 'Love songs as exposed surfaces' }
    ]
  }
]

function AlbumStudyGuides() {
  return (
    <div className="album-study-guides">
      <div className="container">
        <header className="module-header">
          <h1>💿 Album Study Guides</h1>
          <p className="module-subtitle">
            Deep dives into classic Wu-Tang albums with scientific connections to planetary science
          </p>
        </header>

        <section className="intro-section card">
          <h2>How to Use These Guides</h2>
          <p>
            Each album study guide connects the artistic choices and themes of a Wu-Tang project 
            to planetary science concepts. Use these guides for:
          </p>
          <ul>
            <li><strong>Classroom Study:</strong> Integrate hip-hop analysis with science curriculum</li>
            <li><strong>Independent Learning:</strong> Deepen understanding of both music and science</li>
            <li><strong>Discussion Groups:</strong> Use the questions to spark meaningful conversations</li>
            <li><strong>Creative Projects:</strong> Inspire students to create their own planetary-themed work</li>
          </ul>
        </section>

        <section className="albums-section">
          {albums.map((album) => (
            <div key={album.id} className="album-card card" style={{ borderLeftColor: album.color }}>
              <div className="album-header">
                <div className="album-cover" style={{ backgroundColor: album.color }}>
                  {album.coverArt}
                </div>
                <div className="album-info">
                  <h2>{album.title}</h2>
                  <p className="album-artist">{album.artist} ({album.year})</p>
                  <p className="album-planet" style={{ color: album.color }}>
                    🪐 {album.planet} - {album.planetMember}
                  </p>
                </div>
              </div>

              <div className="album-description">
                <p>{album.description}</p>
              </div>

              <div className="album-section">
                <h3>🎯 Core Themes</h3>
                <ul>
                  {album.themes.map((theme, i) => (
                    <li key={i}>{theme}</li>
                  ))}
                </ul>
              </div>

              <div className="album-section">
                <h3>🔬 Scientific Connections</h3>
                <ul>
                  {album.scientificConnections.map((connection, i) => (
                    <li key={i}>{connection}</li>
                  ))}
                </ul>
              </div>

              <div className="album-section">
                <h3>🎵 Key Tracks & Lessons</h3>
                <div className="tracks-list">
                  {album.keyTracks.map((track, i) => (
                    <div key={i} className="track-item">
                      <span className="track-title">{track.title}</span>
                      <span className="track-lesson">{track.lesson}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="album-section">
                <h3>💭 Discussion Questions</h3>
                <ol>
                  {album.discussionQuestions.map((question, i) => (
                    <li key={i}>{question}</li>
                  ))}
                </ol>
              </div>
            </div>
          ))}
        </section>

        <section className="teaching-tips card">
          <h2>📚 Teaching Tips</h2>
          <div className="tips-content">
            <div className="tip-column">
              <h3>For Science Teachers</h3>
              <ul>
                <li>Use lyrics as examples when teaching planetary concepts</li>
                <li>Have students identify scientific metaphors in songs</li>
                <li>Create comparison charts between album traits and planet traits</li>
                <li>Assign students to research and present on one planet/album pair</li>
              </ul>
            </div>
            <div className="tip-column">
              <h3>For English/Music Teachers</h3>
              <ul>
                <li>Analyze lyrical density and writing techniques</li>
                <li>Compare narrative structures across albums</li>
                <li>Study persona development through the planetary lens</li>
                <li>Have students write their own "planetary" verses</li>
              </ul>
            </div>
            <div className="tip-column">
              <h3>For Cross-Curricular Learning</h3>
              <ul>
                <li>Team-teach with both science and humanities perspectives</li>
                <li>Create multimedia projects combining art, science, and music</li>
                <li>Host listening sessions followed by scientific analysis</li>
                <li>Connect to real NASA data about the planets</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="disclaimer card">
          <h2>⚠️ Content Advisory</h2>
          <p>
            Wu-Tang Clan albums contain explicit content. Teachers should preview all material 
            before classroom use and consider using edited versions or specific clean excerpts. 
            The educational value lies in the structural and thematic analysis, which can be 
            taught without explicit content exposure.
          </p>
        </section>
      </div>
    </div>
  )
}

export default AlbumStudyGuides
