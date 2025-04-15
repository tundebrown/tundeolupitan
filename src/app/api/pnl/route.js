import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const image = searchParams.get('image');

  if (!image) {
    return new NextResponse('Missing image parameter', { status: 400 });
  }

  const html = `
    <html prefix="og: https://ogp.me/ns#">
      <head>
        <meta property="og:title" content="Bodega Market PnL">
        <meta property="og:image" content="${image}">
        <meta name="twitter:card" content="summary_large_image">
        <meta name="twitter:title" content="Bodega Market PnL">
        <meta name="twitter:image" content="${image}">
      </head>
      <body>
        <img src="${image}" alt="PnL Screenshot" style="max-width: 100%;" />
      </body>
    </html>
  `;

  return new NextResponse(html, {
    status: 200,
    headers: {
      'Content-Type': 'text/html',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}
