# NewsAgg Docker Guide

`docker-compose.yml` menjalankan tiga service:

| Service   | Isi                                   | Port host           |
|-----------|---------------------------------------|---------------------|
| `server`  | Express + NeonDB (TypeScript)         | `3000`              |
| `client`  | Frontend Vite di-serve via Nginx      | `8080`              |
| `scraper` | Pipeline Python (profile `scraper`)   | — (jalan on-demand) |

Tidak ada PostgreSQL lokal — semua service memakai NeonDB lewat `NEONDB_URL`.

## Environment

Compose membaca env dari **`server/.env`** (dipakai server *dan* scraper). Tidak ada
`.hf.env` terpisah. Minimal yang harus terisi:

```env
NEONDB_URL=postgresql://...   # WAJIB — server & scraper
JWT_SECRET=...                # WAJIB — server gagal boot di production tanpa ini
HF_TOKEN=...                  # untuk scraper (model HuggingFace)
# Sisanya (GROQ_API_KEY, GEMINI_API_KEY, GOOGLE_CLIENT_ID, FAVQS_API_KEY, MEM0_API_KEY)
# opsional agar app menyala; fitur terkait nonaktif bila kosong.
```

URL API frontend di-inject saat build (`VITE_API_URL`, default `http://localhost:3000`).
CORS server dibatasi ke `CLIENT_URL` (`http://localhost:8080`) — keduanya sudah diset di compose.

## Build & jalankan (dari root proyek)

```bash
docker compose up --build
```

Build pertama ~3–5 menit (server + client). Lalu akses:

| Service      | URL                            |
|--------------|--------------------------------|
| Client (app) | http://localhost:8080          |
| Server API   | http://localhost:3000          |
| Health check | http://localhost:3000/health   |

Stop: `docker compose down`

## Scraper (profile terpisah)

```bash
docker compose --profile scraper run --rm scraper
```

Model HuggingFace di-cache di volume `hf_cache` agar tak diunduh ulang tiap run.

## Masalah umum

- **"Cannot connect to Docker daemon"** — pastikan Docker Desktop berjalan.
- **Client blank / error** — cek `NEONDB_URL` di `server/.env`; lihat `docker compose logs server`.
- **Server exit saat boot** — `JWT_SECRET` belum diset (`NODE_ENV=production` mewajibkannya).
- **Perubahan kode tak muncul** — selalu pakai `--build`: `docker compose up --build`.
- **Port bentrok** — ubah sisi kiri port di `docker-compose.yml` (mis. `"3001:3000"`).
