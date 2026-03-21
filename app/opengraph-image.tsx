import { ImageResponse } from 'next/og'

export const alt = 'Aditya Lohar | Portfolio'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #080c14 0%, #0d1321 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'sans-serif',
          color: 'white',
          padding: '40px',
          border: '12px solid #6c63ff',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
             <span style={{ fontSize: '60px', fontWeight: 'bold', color: '#6c63ff' }}>&lt;</span>
             <span style={{ fontSize: '80px', fontWeight: '900', color: 'white', marginLeft: '10px' }}>AL</span>
             <span style={{ fontSize: '60px', fontWeight: 'bold', color: '#6c63ff', marginLeft: '10px' }}>/&gt;</span>
        </div>
        <div style={{ fontSize: '80px', fontWeight: 'bold', marginBottom: '10px', textAlign: 'center' }}>
          Aditya Sunil Lohar
        </div>
        <div style={{ fontSize: '30px', color: '#a8b2d1', letterSpacing: '4px', textTransform: 'uppercase' }}>
          Full-Stack Web Developer
        </div>
        <div style={{ display: 'flex', position: 'absolute', bottom: '60px', left: '100px', right: '100px', height: '1.5px', background: 'rgba(255,255,255,0.1)' }} />
        <div style={{ position: 'absolute', bottom: '30px', color: '#5a6a8a', fontSize: '18px' }}>
          portfolio.adityalohar.com
        </div>
      </div>
    ),
    { ...size }
  )
}
