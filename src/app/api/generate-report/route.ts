import { NextRequest, NextResponse } from 'next/server';

// Simple version for testing without OpenAI first
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Check if we have OpenAI key
    const hasOpenAIKey = process.env.OPENAI_API_KEY && process.env.OPENAI_API_KEY !== 'your_openai_api_key';
    
    if (!hasOpenAIKey) {
      // Return a mock report for testing
      const mockReport = `Good afternoon! ${body.childName} had a wonderful day at school today!

${body.childName} started the day with great enthusiasm. During our morning activities, they participated actively in ${body.activities || 'various learning activities'}. Their energy and curiosity were delightful to see!

For meals today, ${body.childName} enjoyed ${body.meals || 'their lunch'} and ate well. It's always great to see them trying different foods and maintaining good eating habits.

The overall mood today was ${body.mood || 'happy'}, and ${body.childName} interacted beautifully with friends. ${body.highlights ? `Some special moments included: ${body.highlights}.` : 'They showed kindness and cooperation throughout the day.'}

${body.notes ? `Additional notes: ${body.notes}` : ''}

We're looking forward to another great day tomorrow! ${body.childName} continues to grow and learn in wonderful ways.

Best regards,
Your SebyNela Teacher`;

      return NextResponse.json({
        success: true,
        report: mockReport,
        mock: true // Indicate this is a mock response
      });
    }
    
    // If we have OpenAI key, use it
    const { OpenAI } = await import('openai');
    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });
    
    const prompt = `You are a caring childcare teacher writing a daily report for parents.
Child: ${body.childName} (${body.age} years old)
Activities: ${body.activities}
Meals: ${body.meals}
Mood: ${body.mood}
Highlights: ${body.highlights}
Notes: ${body.notes || 'None'}

Write a warm, personalized 250-word daily report that makes parents feel connected to their child's day. Include specific details and developmental observations.`;

    const completion = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'system',
          content: 'You are a caring, experienced childcare educator writing daily reports for parents.'
        },
        {
          role: 'user',
          content: prompt
        }
      ],
      temperature: 0.7,
      max_tokens: 500,
    });
    
    const report = completion.choices[0].message.content || 'Unable to generate report';
    
    return NextResponse.json({
      success: true,
      report: report,
      mock: false
    });
    
  } catch (error) {
    console.error('Error in generate-report API:', error);
    
    // Return a helpful error message
    return NextResponse.json({
      success: false,
      error: 'Failed to generate report',
      details: error instanceof Error ? error.message : 'Unknown error',
      hint: 'Make sure your OpenAI API key is set in .env.local'
    }, { status: 500 });
  }
}

// Also handle GET for testing
export async function GET() {
  return NextResponse.json({
    message: 'Report generation API is working!',
    endpoint: 'POST /api/generate-report',
    required: {
      childName: 'string',
      age: 'number',
      activities: 'string',
      meals: 'string',
      mood: 'string',
      highlights: 'string',
      notes: 'string (optional)'
    }
  });
}
