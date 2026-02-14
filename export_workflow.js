// Exportiert den Chatbot-Superchat Workflow als JSON
const https = require('https');
const fs = require('fs');
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJlMTJlZTBjNS02NWIyLTQ0NDItOTEzYi0xYThmMDFlMTUxZDkiLCJpc3MiOiJuOG4iLCJhdWQiOiJwdWJsaWMtYXBpIiwiaWF0IjoxNzY2NTE0NDgzfQ.6VaPRNps_y7Q8DDt4FSDR4O7-A9Nz6y89hLUgkSpp4w';

https.get({
  hostname: 'make.tschatscher.eu',
  path: '/api/v1/workflows/FOKUvYQahZcDRoFR',
  headers: { 'X-N8N-API-KEY': API_KEY }
}, res => {
  let d = '';
  res.on('data', c => d += c);
  res.on('end', () => {
    const wf = JSON.parse(d);
    // Workflow-Export speichern
    const exportData = {
      name: wf.name,
      nodes: wf.nodes,
      connections: wf.connections,
      settings: wf.settings,
      active: wf.active
    };
    const filename = `workflows/chatbot-superchat.json`;
    fs.mkdirSync('workflows', { recursive: true });
    fs.writeFileSync(filename, JSON.stringify(exportData, null, 2));
    console.log('Exported to:', filename);
    console.log('Nodes:', wf.nodes.length);
    console.log('Active:', wf.active);
  });
});
