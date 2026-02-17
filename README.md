# N8N Workflows - Allianz Agentur Sven Jaeger

n8n Workflow-Backups und Versionierung.

## Instance

- **URL**: `make.tschatscher.eu`
- **Workflows**: Chatbot - Superchat (WhatsApp Insurance Bot)

## Workflow: Chatbot - Superchat

WhatsApp-Chatbot "Oliver" via Superchat. Beraten zu:
- **Zahnversicherung** (Allianz DentalBest)
- **Tierkrankenversicherung** (Hund/Katze/Pferd)
- **Bestandskunden** (allgemeine Fragen)

### Architektur
```
Webhook -> Tageszeit -> DB Lookup -> Merge -> Switch
  -> Zahnversicherung: Code -> Agent -> Lead Scoring -> SC Update -> Upsert -> Send Message
  -> TKV (Hund/Katze/Pferd/Neutral): Set -> Agent -> Upsert -> Send Message
  -> Bestandskunde: Agent -> Upsert -> Send Message
```

### Tech Stack
- n8n (self-hosted)
- OpenAI GPT-4o (Agents)
- Qdrant Vector Store (RAG)
- PostgreSQL (Chat Memory)
- Superchat API (WhatsApp)
- n8n DataTable (Lead-Tracking)

## Ordnerstruktur

```
workflows/          # Aktuelle Workflow-JSONs
backups/            # Datierte Backups
```
