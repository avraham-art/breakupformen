# CLAUDE.md — breakupformen.com

> קרא קובץ זה בתחילת כל סשן. זהו הזיכרון הפעיל של הפרויקט.

---

## מה הפרויקט הזה

אתר Next.js לגברים בתהליך פרידה — תחת המותג **Neshima Hadasha**.
המטרה: מוצר דיגיטלי מדרגי שמשלב תוכן, כלים, ומכירה.

**Repository:** `github.com/avraham-art/breakupformen`
**Live URL:** `https://breakupformen.com`

---

## ארכיטקטורה טכנית

### Stack
- **Framework:** Next.js (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Package Manager:** npm

### שרת ופריסה
- **Cloud:** CloudPanel על VPS
- **IP:** `213.199.39.103`
- **Process Manager:** PM2 — שם השירות: `breakupformen`
- **Port:** `3001`
- **SSL:** Let's Encrypt דרך CloudPanel

### משתמש SSH
```
ssh breakupformen@213.199.39.103
```
- תיקיית הפרויקט: `/home/breakupformen/htdocs/breakupformen.com`
- Node version: `v22.22.0` (דרך nvm)

### Auto-Deploy Pipeline
```
VS Code → git push → GitHub → Webhook (port 4000) → deploy.sh → pm2 restart
```
- **Webhook server:** `webhook-server.js` — רץ דרך PM2 בשם `webhook`
- **Deploy script:** `deploy.sh` (git pull → npm install → npm run build → pm2 restart)
- **GitHub Webhook URL:** `http://213.199.39.103:4000/deploy`

---

## פקודות חיוניות

### בדיקת סטטוס
```bash
pm2 status                          # בדוק שניהם: breakupformen + webhook
pm2 logs breakupformen --lines 30   # לוגים של האתר
pm2 logs webhook --lines 20         # לוגים של ה-webhook
```

### פריסה ידנית (אם ה-webhook לא עבד)
```bash
cd /home/breakupformen/htdocs/breakupformen.com
git pull origin main
npm install
npm run build
pm2 restart breakupformen
```

### הפעלה מחדש מלאה
```bash
pm2 restart all
pm2 save
```

### בניה מקומית
```bash
npm run dev      # פיתוח
npm run build    # בנייה לproduction
npm run start    # הרצה מקומית
```

---

## מבנה תיקיות

```
breakupformen/
├── app/                  # Next.js App Router — דפים וlayout
│   ├── page.tsx          # דף ראשי
│   ├── about/
│   ├── blog/
│   ├── contact/
│   └── resources/
├── components/           # קומפוננטים משותפים
├── public/               # תמונות וassets סטטיים
├── deploy.sh             # סקריפט פריסה אוטומטי
├── webhook-server.js     # שרת webhook (port 4000)
├── CLAUDE.md             # קובץ זה
└── package.json
```

---

## DNS (Namecheap)

| Type | Host | Value |
|------|------|-------|
| A Record | @ | 213.199.39.103 |
| A Record | www | 213.199.39.103 |

---

## כללי עבודה בפרויקט הזה

### לפני שמתחילים כל משימה
1. בדוק `pm2 status` — וודא שהאתר רץ
2. בדוק שהbranch הוא `main`
3. הבן את ה**מטרה עסקית** מאחורי הבקשה הטכנית

### סטנדרטים של קוד
- **TypeScript strict** — אין `any` בלי הסבר
- **Tailwind only** — אין CSS modules נפרדים
- **Server Components** כברירת מחדל — `"use client"` רק כשנדרש אינטראקטיביות
- כל קומפוננט — קובץ נפרד עם שם ברור

### תהליך הוספת פיצ'ר
```
1. Plan    — מה המטרה העסקית?
2. Design  — מה הממשק / הלוגיקה?
3. Build   — כתיבת קוד
4. Test    — בדיקה מקומית (npm run build)
5. Deploy  — git push → auto-deploy
6. Verify  — בדיקה ב-https://breakupformen.com
```

---

## בעיות נפוצות ופתרונות

| בעיה | סיבה | פתרון |
|------|------|-------|
| אתר לא עולה | PM2 נפל | `pm2 restart breakupformen` |
| Push לא מתעדכן באתר | Webhook לא רץ | `pm2 restart webhook` |
| Build נכשל | שגיאת TypeScript | `npm run build` מקומית ותקן |
| 502 Bad Gateway | האפליקציה לא רצה | `pm2 logs breakupformen --lines 30` |
| SSL פג | Let's Encrypt | CloudPanel → SSL/TLS → Renew |

---

## הקשר עסקי

- **קהל יעד:** גברים בתהליך פרידה/גירושין
- **מותג:** Neshima Hadasha — נשימה חדשה
- **מטרת האתר:** בניית אמון → לידים → מוצרים דיגיטליים
- **שפה:** עברית (RTL) עם אפשרות לאנגלית בעתיד
- **מודל הכנסות:** מוצרים דיגיטליים, קורסים, coaching

---

*עדכן קובץ זה לאחר כל שינוי ארכיטקטורלי משמעותי.*
