import { DailyReportForm } from '@/components/daily-report-form'

export default function Home() {
  return (
    <div
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        padding: '20px',
      }}
    >
      {/* Simple Header */}
      <header
        style={{
          textAlign: 'center',
          color: 'white',
          marginBottom: '40px',
          paddingTop: '20px',
        }}
      >
        <h1
          style={{
            fontSize: '48px',
            fontWeight: 'bold',
            margin: '0 0 12px 0',
            textShadow: '2px 2px 4px rgba(0,0,0,0.2)',
          }}
        >
          SebyNela 🌟
        </h1>
        <p
          style={{
            fontSize: '20px',
            opacity: 0.95,
          }}
        >
          AI-Powered Childcare Reports • Save 20+ Hours Weekly
        </p>
      </header>

      {/* Form Component */}
      <DailyReportForm />

      {/* Footer */}
      <footer
        style={{
          textAlign: 'center',
          color: 'white',
          marginTop: '60px',
          paddingBottom: '20px',
          fontSize: '14px',
          opacity: 0.9,
        }}
      >
        <p>© 2024 SebyNela. Made with ❤️ for childcare providers.</p>
      </footer>
    </div>
  )
}
