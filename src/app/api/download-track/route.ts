import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(request: Request) {
  try {
    const { platform, version } = await request.json();

    if (!platform || !version) {
      return NextResponse.json({ error: 'Platform and version required' }, { status: 400 });
    }

    await prisma.download.create({ data: { platform, version } });

    return NextResponse.json({ success: true }, { status: 201 });
  } catch (error) {
    console.error('Download track error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
