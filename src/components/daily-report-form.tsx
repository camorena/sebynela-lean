'use client'

import { useState, CSSProperties } from 'react'

export function DailyReportForm() {
  const [isGenerating, setIsGenerating] = useState(false)
  const [generatedReport, setGeneratedReport] = useState('')
  const [formData, setFormData] = useState({
    childName: '',
    age: '',
    activities: '',
    meals: '',
    mood: 'happy',
    highlights: '',
    notes: '',
  })

  const fillSampleData = () => {
    setFormData({
      childName: 'Emma Johnson',
      age: '3',
      activities:
        "9:00 AM - Circle time, learned about colors and shapes\n10:00 AM - Outdoor play, played on swings and slides\n11:00 AM - Art project, painted beautiful butterflies\n2:00 PM - Story time, read 'The Very Hungry Caterpillar'",
      meals:
        'Breakfast: Oatmeal with berries (ate all)\nSnack: Apple slices and crackers (ate most)\nLunch: Mac and cheese, carrots, milk (ate some)',
      mood: 'happy',
      highlights: 'Shared toys, helped a friend, great listener',
      notes: 'Emma is making great progress with her social skills!',
    })
  }

  const clearForm = () => {
    setFormData({
      childName: '',
      age: '',
      activities: '',
      meals: '',
      mood: 'happy',
      highlights: '',
      notes: '',
    })
    setGeneratedReport('')
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsGenerating(true)
    setGeneratedReport('')

    try {
      const response = await fetch('/api/generate-report', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      const result = await response.json()
      if (result.success) {
        setGeneratedReport(result.report)
        setTimeout(() => {
          document.getElementById('generated-report')?.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          })
        }, 100)
      }
    } catch (error) {
      console.error('Error:', error)
      alert('Failed to generate report. Please check your API keys.')
    } finally {
      setIsGenerating(false)
    }
  }

  // Styles with proper TypeScript types
  const styles = {
    container: {
      maxWidth: '800px',
      margin: '0 auto',
      padding: '20px',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    } as CSSProperties,
    card: {
      backgroundColor: 'white',
      borderRadius: '16px',
      boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
      overflow: 'hidden',
      marginBottom: '24px',
    } as CSSProperties,
    header: {
      background: 'linear-gradient(135deg, #9333ea 0%, #ec4899 100%)',
      padding: '30px',
      color: 'white',
    } as CSSProperties,
    title: {
      fontSize: '32px',
      fontWeight: 'bold',
      margin: '0 0 8px 0',
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
    } as CSSProperties,
    subtitle: {
      fontSize: '16px',
      opacity: 0.95,
      margin: 0,
    } as CSSProperties,
    form: {
      padding: '30px',
    } as CSSProperties,
    buttonRow: {
      display: 'flex',
      justifyContent: 'flex-end',
      gap: '12px',
      marginBottom: '24px',
    } as CSSProperties,
    secondaryButton: {
      padding: '10px 20px',
      backgroundColor: '#f3f4f6',
      color: '#4b5563',
      border: 'none',
      borderRadius: '8px',
      fontSize: '14px',
      fontWeight: '500',
      cursor: 'pointer',
      transition: 'background-color 0.2s',
    } as CSSProperties,
    inputGroup: {
      marginBottom: '24px',
    } as CSSProperties,
    label: {
      display: 'block',
      marginBottom: '8px',
      fontWeight: '600',
      color: '#111827',
      fontSize: '14px',
    } as CSSProperties,
    input: {
      width: '100%',
      padding: '12px 16px',
      border: '2px solid #e5e7eb',
      borderRadius: '8px',
      fontSize: '16px',
      color: '#111827',
      backgroundColor: 'white',
      boxSizing: 'border-box' as const,
      transition: 'border-color 0.2s',
      outline: 'none',
    } as CSSProperties,
    textarea: {
      width: '100%',
      padding: '12px 16px',
      border: '2px solid #e5e7eb',
      borderRadius: '8px',
      fontSize: '16px',
      color: '#111827',
      backgroundColor: 'white',
      resize: 'vertical' as const,
      fontFamily: 'inherit',
      boxSizing: 'border-box' as const,
      transition: 'border-color 0.2s',
      outline: 'none',
    } as CSSProperties,
    select: {
      width: '100%',
      padding: '12px 16px',
      border: '2px solid #e5e7eb',
      borderRadius: '8px',
      fontSize: '16px',
      color: '#111827',
      backgroundColor: 'white',
      cursor: 'pointer',
      boxSizing: 'border-box' as const,
      transition: 'border-color 0.2s',
      outline: 'none',
    } as CSSProperties,
    gridTwo: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '20px',
      marginBottom: '24px',
    } as CSSProperties,
    submitButton: {
      width: '100%',
      padding: '16px',
      background: 'linear-gradient(135deg, #9333ea 0%, #ec4899 100%)',
      color: 'white',
      border: 'none',
      borderRadius: '12px',
      fontSize: '18px',
      fontWeight: 'bold',
      cursor: 'pointer',
      boxShadow: '0 4px 15px rgba(147, 51, 234, 0.3)',
      transition: 'transform 0.2s, box-shadow 0.2s',
      marginTop: '12px',
    } as CSSProperties,
    submitButtonDisabled: {
      background: '#9ca3af',
      cursor: 'not-allowed',
      transform: 'none',
    } as CSSProperties,
    helpText: {
      fontSize: '12px',
      color: '#6b7280',
      marginTop: '4px',
    } as CSSProperties,
    report: {
      background: 'linear-gradient(135deg, #f3e7fc 0%, #fce7f3 100%)',
      borderRadius: '16px',
      overflow: 'hidden',
      boxShadow: '0 10px 30px rgba(147, 51, 234, 0.1)',
    } as CSSProperties,
    reportHeader: {
      background: 'linear-gradient(135deg, #9333ea 0%, #ec4899 100%)',
      padding: '20px 30px',
      color: 'white',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    } as CSSProperties,
    reportTitle: {
      fontSize: '24px',
      fontWeight: 'bold',
      margin: 0,
    } as CSSProperties,
    reportContent: {
      padding: '30px',
      backgroundColor: 'white',
      margin: '20px',
      borderRadius: '12px',
      whiteSpace: 'pre-wrap' as const,
      lineHeight: '1.8',
      color: '#1f2937',
      fontSize: '16px',
      fontFamily: 'Georgia, serif',
    } as CSSProperties,
    copyButton: {
      padding: '10px 20px',
      backgroundColor: 'white',
      color: '#9333ea',
      border: 'none',
      borderRadius: '8px',
      fontWeight: '600',
      cursor: 'pointer',
      fontSize: '14px',
      transition: 'transform 0.2s',
    } as CSSProperties,
  }

  return (
    <div style={styles.container}>
      {/* Main Form Card */}
      <div style={styles.card}>
        {/* Header */}
        <div style={styles.header}>
          <h2 style={styles.title}>
            <span>✨</span>
            Daily Report Generator
          </h2>
          <p style={styles.subtitle}>Create beautiful, personalized reports in seconds with AI</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} style={styles.form}>
          {/* Quick Actions */}
          <div style={styles.buttonRow}>
            <button
              type="button"
              onClick={fillSampleData}
              style={styles.secondaryButton}
              onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#e5e7eb')}
              onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#f3f4f6')}
            >
              📝 Fill Sample Data
            </button>
            <button
              type="button"
              onClick={clearForm}
              style={styles.secondaryButton}
              onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#e5e7eb')}
              onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#f3f4f6')}
            >
              🗑️ Clear Form
            </button>
          </div>

          {/* Two Column Grid */}
          <div style={styles.gridTwo}>
            {/* Child Name */}
            <div>
              <label style={styles.label}>👶 Child's Name *</label>
              <input
                type="text"
                required
                value={formData.childName}
                onChange={(e) => setFormData({ ...formData, childName: e.target.value })}
                placeholder="Emma Johnson"
                style={styles.input}
                onFocus={(e) => (e.currentTarget.style.borderColor = '#9333ea')}
                onBlur={(e) => (e.currentTarget.style.borderColor = '#e5e7eb')}
              />
            </div>

            {/* Age */}
            <div>
              <label style={styles.label}>🎂 Age *</label>
              <input
                type="number"
                required
                min="0"
                max="18"
                value={formData.age}
                onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                placeholder="3"
                style={styles.input}
                onFocus={(e) => (e.currentTarget.style.borderColor = '#9333ea')}
                onBlur={(e) => (e.currentTarget.style.borderColor = '#e5e7eb')}
              />
            </div>
          </div>

          {/* Activities */}
          <div style={styles.inputGroup}>
            <label style={styles.label}>🎨 Today's Activities *</label>
            <textarea
              required
              rows={4}
              value={formData.activities}
              onChange={(e) => setFormData({ ...formData, activities: e.target.value })}
              placeholder="9:00 AM - Circle time, learned about colors and shapes
10:00 AM - Outdoor play, played on swings and slides
11:00 AM - Art project, painted beautiful butterflies
2:00 PM - Story time, read 'The Very Hungry Caterpillar'"
              style={styles.textarea}
              onFocus={(e) => (e.currentTarget.style.borderColor = '#9333ea')}
              onBlur={(e) => (e.currentTarget.style.borderColor = '#e5e7eb')}
            />
            <p style={styles.helpText}>
              Tip: Include specific activities and times for a detailed report
            </p>
          </div>

          {/* Meals */}
          <div style={styles.inputGroup}>
            <label style={styles.label}>🍽️ Meals & Snacks *</label>
            <textarea
              required
              rows={3}
              value={formData.meals}
              onChange={(e) => setFormData({ ...formData, meals: e.target.value })}
              placeholder="Breakfast: Oatmeal with berries (ate all)
Snack: Apple slices and crackers (ate most)
Lunch: Mac and cheese, carrots, milk (ate some)"
              style={styles.textarea}
              onFocus={(e) => (e.currentTarget.style.borderColor = '#9333ea')}
              onBlur={(e) => (e.currentTarget.style.borderColor = '#e5e7eb')}
            />
          </div>

          {/* Mood and Highlights Grid */}
          <div style={styles.gridTwo}>
            {/* Mood */}
            <div>
              <label style={styles.label}>😊 Overall Mood Today *</label>
              <select
                value={formData.mood}
                onChange={(e) => setFormData({ ...formData, mood: e.target.value })}
                style={styles.select}
                onFocus={(e) => (e.currentTarget.style.borderColor = '#9333ea')}
                onBlur={(e) => (e.currentTarget.style.borderColor = '#e5e7eb')}
              >
                <option value="happy">😊 Happy & Content</option>
                <option value="playful">🤸 Playful & Active</option>
                <option value="calm">😌 Calm & Peaceful</option>
                <option value="energetic">⚡ Energetic & Excited</option>
                <option value="tired">😴 Tired & Sleepy</option>
              </select>
            </div>

            {/* Highlights */}
            <div>
              <label style={styles.label}>⭐ Today's Highlights</label>
              <input
                type="text"
                value={formData.highlights}
                onChange={(e) => setFormData({ ...formData, highlights: e.target.value })}
                placeholder="Shared toys, helped a friend, great listener"
                style={styles.input}
                onFocus={(e) => (e.currentTarget.style.borderColor = '#9333ea')}
                onBlur={(e) => (e.currentTarget.style.borderColor = '#e5e7eb')}
              />
            </div>
          </div>

          {/* Additional Notes */}
          <div style={styles.inputGroup}>
            <label style={styles.label}>📝 Additional Notes (Optional)</label>
            <textarea
              rows={2}
              value={formData.notes}
              onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
              placeholder="Any special notes, reminders, or observations for parents..."
              style={styles.textarea}
              onFocus={(e) => (e.currentTarget.style.borderColor = '#9333ea')}
              onBlur={(e) => (e.currentTarget.style.borderColor = '#e5e7eb')}
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isGenerating}
            style={{
              ...styles.submitButton,
              ...(isGenerating ? styles.submitButtonDisabled : {}),
            }}
            onMouseOver={(e) =>
              !isGenerating && (e.currentTarget.style.transform = 'translateY(-2px)')
            }
            onMouseOut={(e) => !isGenerating && (e.currentTarget.style.transform = 'translateY(0)')}
          >
            {isGenerating ? '⏳ Generating Report...' : '✨ Generate AI Report'}
          </button>
        </form>
      </div>

      {/* Generated Report */}
      {generatedReport && (
        <div id="generated-report" style={styles.report}>
          <div style={styles.reportHeader}>
            <h3 style={styles.reportTitle}>📋 Daily Report</h3>
            <button
              onClick={() => {
                navigator.clipboard.writeText(generatedReport)
                alert('Report copied to clipboard!')
              }}
              style={styles.copyButton}
              onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
              onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
            >
              📋 Copy Report
            </button>
          </div>
          <div style={styles.reportContent}>{generatedReport}</div>
        </div>
      )}
    </div>
  )
}
