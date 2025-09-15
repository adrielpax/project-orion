// pages/api/test-sheets.js
// OU
// app/api/test-sheets/route.js (se usando App Router)

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Dados de teste
    const testData = {
      nome: "João Silva Teste",
      email: "joao.teste@exemplo.com",
      telefone: "(11) 99999-9999",
      empresa: "Empresa Teste Next.js",
      cargo: "Desenvolvedor Frontend",
      interesse: "Consultoria Web",
      origem: "Teste API Next.js",
      timestamp: new Date().toISOString(),
      userAgent: req.headers['user-agent'],
      url: req.headers.referer || 'teste-local'
    };

    console.log('🧪 Testando integração com Google Sheets...');
    console.log('📤 Dados que serão enviados:', testData);
    console.log('🌐 URL do Apps Script:', process.env.NEXT_PUBLIC_SHEETS_URL);

    // Faz a requisição para o Google Apps Script
    const response = await fetch(process.env.NEXT_PUBLIC_SHEETS_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(testData),
      redirect: 'follow'
    });

    console.log('📡 Status da resposta:', response.status);
    console.log('📡 Headers da resposta:', Object.fromEntries(response.headers.entries()));

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    console.log('✅ Resposta do Google Sheets:', result);

    if (result.success) {
      return res.status(200).json({
        success: true,
        message: 'Teste realizado com sucesso!',
        data: result,
        testData: testData
      });
    } else {
      throw new Error(result.error || 'Erro desconhecido do Google Sheets');
    }

  } catch (error) {
    console.error('❌ Erro no teste:', error.message);
    console.error('🔍 Stack:', error.stack);

    return res.status(500).json({
      success: false,
      error: error.message,
      message: 'Erro ao testar integração com Google Sheets',
      sheetsUrl: process.env.NEXT_PUBLIC_SHEETS_URL,
      troubleshooting: [
        'Verifique se NEXT_PUBLIC_SHEETS_URL está configurado no .env.local',
        'Confirme se a URL termina com "/exec" (não "/dev")',
        'Certifique-se de que o Google Apps Script foi deployado como Web App',
        'Verifique se as permissões estão: Execute as "Me" e Access "Anyone"',
        'Teste a URL diretamente no navegador - deve retornar JSON, não HTML',
        'Certifique-se de que a planilha "click_pulso" existe e é acessível'
      ]
    });
  }
}

// Se usando App Router (app/api/test-sheets/route.js), use esta versão:
/*
export async function POST(request) {
  try {
    const testData = {
      nome: "João Silva Teste",
      email: "joao.teste@exemplo.com",
      telefone: "(11) 99999-9999",
      empresa: "Empresa Teste Next.js",
      cargo: "Desenvolvedor Frontend",
      interesse: "Consultoria Web",
      origem: "Teste API Next.js",
      timestamp: new Date().toISOString(),
      userAgent: request.headers.get('user-agent'),
      url: request.headers.get('referer') || 'teste-local'
    };

    console.log('🧪 Testando integração com Google Sheets...');
    console.log('📤 Dados que serão enviados:', testData);

    const response = await fetch(process.env.NEXT_PUBLIC_SHEETS_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(testData),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    console.log('✅ Resposta do Google Sheets:', result);

    if (result.success) {
      return Response.json({
        success: true,
        message: 'Teste realizado com sucesso!',
        data: result,
        testData: testData
      });
    } else {
      throw new Error(result.error || 'Erro desconhecido do Google Sheets');
    }

  } catch (error) {
    console.error('❌ Erro no teste:', error.message);

    return Response.json({
      success: false,
      error: error.message,
      message: 'Erro ao testar integração com Google Sheets'
    }, { status: 500 });
  }
}
*/