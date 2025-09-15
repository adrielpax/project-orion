// pages/test-sheets.js
// Página para testar a integração com Google Sheets

import { useState } from 'react';

export default function TestSheetsPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const testIntegration = async () => {
    setIsLoading(true);
    setResult(null);
    setError(null);

    try {
      console.log('🧪 Iniciando teste da integração...');
      
      const response = await fetch('/api/test-sheets', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = await response.json();

      if (data.success) {
        console.log('✅ Teste bem-sucedido:', data);
        setResult(data);
      } else {
        console.error('❌ Teste falhou:', data);
        setError(data);
      }

    } catch (err) {
      console.error('❌ Erro na requisição:', err);
      setError({
        success: false,
        error: err.message,
        message: 'Erro na comunicação com a API'
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div style={{ 
      padding: '20px', 
      maxWidth: '800px', 
      margin: '0 auto',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h1>🧪 Teste de Integração Google Sheets</h1>
      
      <div style={{ marginBottom: '20px' }}>
        <p>Esta página testa a integração entre Next.js e Google Sheets.</p>
        <p><strong>Antes de testar, certifique-se de que:</strong></p>
        <ul>
          <li>✅ Você configurou o <code>NEXT_PUBLIC_SHEETS_URL</code> no arquivo <code>.env.local</code></li>
          <li>✅ O Google Apps Script foi deployado como Web App</li>
          <li>✅ A planilha "click_pulso" existe no Google Sheets</li>
          <li>✅ As permissões do Apps Script estão configuradas corretamente</li>
        </ul>
      </div>

      <button 
        onClick={testIntegration}
        disabled={isLoading}
        style={{
          padding: '12px 24px',
          fontSize: '16px',
          backgroundColor: isLoading ? '#ccc' : '#4CAF50',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: isLoading ? 'not-allowed' : 'pointer',
          marginBottom: '20px'
        }}
      >
        {isLoading ? '🔄 Testando...' : '🚀 Testar Integração'}
      </button>

      {/* Resultado de sucesso */}
      {result && (
        <div style={{
          backgroundColor: '#d4edda',
          border: '1px solid #c3e6cb',
          borderRadius: '4px',
          padding: '15px',
          marginBottom: '20px'
        }}>
          <h3 style={{ color: '#155724', margin: '0 0 10px 0' }}>
            ✅ Teste Realizado com Sucesso!
          </h3>
          <p style={{ margin: '5px 0', color: '#155724' }}>
            <strong>Mensagem:</strong> {result.message}
          </p>
          {result.data && (
            <details style={{ marginTop: '10px' }}>
              <summary style={{ cursor: 'pointer', color: '#155724' }}>
                Ver detalhes da resposta
              </summary>
              <pre style={{ 
                backgroundColor: '#f8f9fa', 
                padding: '10px', 
                borderRadius: '4px',
                overflow: 'auto',
                fontSize: '12px',
                marginTop: '10px'
              }}>
                {JSON.stringify(result.data, null, 2)}
              </pre>
            </details>
          )}
        </div>
      )}

      {/* Resultado de erro */}
      {error && (
        <div style={{
          backgroundColor: '#f8d7da',
          border: '1px solid #f5c6cb',
          borderRadius: '4px',
          padding: '15px',
          marginBottom: '20px'
        }}>
          <h3 style={{ color: '#721c24', margin: '0 0 10px 0' }}>
            ❌ Erro no Teste
          </h3>
          <p style={{ margin: '5px 0', color: '#721c24' }}>
            <strong>Mensagem:</strong> {error.message}
          </p>
          <p style={{ margin: '5px 0', color: '#721c24' }}>
            <strong>Erro:</strong> {error.error}
          </p>
          
          {error.troubleshooting && (
            <div style={{ marginTop: '15px' }}>
              <strong style={{ color: '#721c24' }}>Soluções possíveis:</strong>
              <ul style={{ color: '#721c24', marginTop: '5px' }}>
                {error.troubleshooting.map((tip, index) => (
                  <li key={index} style={{ marginBottom: '5px' }}>{tip}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}

      {/* Informações de configuração */}
      <div style={{
        backgroundColor: '#f8f9fa',
        border: '1px solid #dee2e6',
        borderRadius: '4px',
        padding: '15px'
      }}>
        <h3 style={{ margin: '0 0 10px 0' }}>ℹ️ Configuração Atual</h3>
        <p><strong>SHEETS_URL:</strong> {process.env.NEXT_PUBLIC_SHEETS_URL || '❌ Não configurado'}</p>
        <p><strong>Status:</strong> {process.env.NEXT_PUBLIC_SHEETS_URL ? '✅ Configurado' : '❌ Variável de ambiente não encontrada'}</p>
      </div>
    </div>
  );
}