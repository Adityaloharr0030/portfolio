import { ImageResponse } from 'next/og'

export const alt = 'Blog Post | Aditya Lohar'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image({ params }: { params: { slug: string } }) {
  const title = params.slug.replace(/-/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase())

  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #0d1321 0%, #080c14 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          fontFamily: 'sans-serif',
          color: 'white',
          padding: '80px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '40px', background: 'rgba(108,99,255,0.1)', padding: '10px 20px', borderRadius: '50px', border: '1px solid rgba(108,99,255,0.3)' }}>
          <span style={{ color: '#6c63ff', fontSize: '20px', fontWeight: 'bold', marginRight: '10px' }}>ARTICLE</span>
          <span style={{ color: '#a8b2d1', fontSize: '20px' }}>• Aditya Lohar Blog</span>
        </div>
        
        <div style={{ fontSize: '75px', fontWeight: '800', lineHeight: '1.1', color: 'white', maxWidth: '1000px', marginBottom: '60px' }}>
          {title}
        </div>

        <div style={{ display: 'flex', alignItems: 'center' }}>
            <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'linear-gradient(135deg, #6c63ff 0%, #00d4ff 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '24px', fontWeight: 'bold' }}>AL</div>
            <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '20px' }}>
                <span style={{ fontSize: '24px', fontWeight: 'bold', color: 'white' }}>Aditya Lohar</span>
                <span style={{ fontSize: '18px', color: '#5a6a8a' }}>Full-Stack Developer</span>
            </div>
        </div>

        <div style={{ position: 'absolute', bottom: '40px', right: '40px', color: '#6c63ff', fontSize: '20px', fontWeight: 'bold' }}>
          &lt;AL /&gt;
        </div>
      </div>
    ),
    { ...size }
  )
}
