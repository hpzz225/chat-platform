# Chat Platform Roadmap

## Muc tieu
- Xay dung chat platform theo huong Discord/Slack, toi uu cho mo hinh san pham + van hanh production.
- Uu tien MVP chat text truoc, sau do moi mo rong realtime, media, search, va observability.

## Stack va vi sao chon

### Frontend
- **Vercel**
  - Hop cho preview deploy, PR previews, CDN, va iteration UI nhanh.
  - Phu hop cho client app, khong can tu quan ly server.

### Backend
- **Render hoac Cloud Run**
  - Phu hop hon cho NestJS long-running server va WebSocket.
  - It dong cham vao backend runtime hien tai.
  - De scale dich vu node server hon so voi all-in serverless.

### Database
- **Postgres**
  - Data model cua chat app la relational ro rang: user, conversation, message, reaction, receipt, attachment.
  - Prisma da phu hop voi schema-driven flow nay.

### Redis
- **Upstash Redis**
  - Hop cho serverless/managed usage.
  - Dung cho pub/sub, presence, typing, cache, ratelimit.

### File storage
- **Cloudflare R2 hoac S3**
  - Attachment khong nen luu trong DB.
  - De scale va backup tot hon.

## Roadmap theo milestone

### Milestone 0 - Nen tang
- Chot env contract va config validation.
- Hoan chinh Prisma module/package boundary.
- Chay build, lint, typecheck on workspace.
- Chot migration flow cho dev/staging/prod.

Done khi:
- Repo build duoc.
- Prisma generate va server compile on.
- Moi project co cach chay ro rang.

### Milestone 1 - Auth va user
- Dang ky, dang nhap, dang xuat.
- JWT/session strategy.
- User profile co ban.
- Role co ban: owner/admin/member.

Done khi:
- Co the tao user va dang nhap.
- Server biet ai dang goi API.

### Milestone 2 - Core chat
- Direct message va group conversation.
- Message list, send, edit, delete.
- Reaction va read receipt.
- Pagination va query toi uu.

Done khi:
- Co the chat text end-to-end.
- Sidebar conversation va message timeline chay on.

### Milestone 3 - Realtime
- WebSocket gateway.
- Redis pub/sub giua nhieu instance.
- Typing indicator.
- Presence va online status.
- Reconnect/backoff o client.

Done khi:
- Message hien ngay cho nguoi nhan.
- Nhieu instance van dong bo duoc.

### Milestone 4 - Attachments va media
- Upload file len object storage.
- Signed URL hoac upload proxy.
- Metadata attachment luu trong DB.

Done khi:
- User gui duoc anh/file.
- Backend khong can giu payload lon.

### Milestone 5 - Search, notification, unread
- Search tin nhan.
- Unread badge.
- Mention notification.
- Notification pipeline.

Done khi:
- Tim duoc message va conversation.
- Unread count cap nhat dung.

### Milestone 6 - Hardening va scale
- Rate limiting.
- Security headers va CORS.
- Structured logging.
- Metrics va error tracking.
- Health/readiness endpoints.
- Load test va tuning connection pool.

Done khi:
- Co the deploy production voi confidence cao hon.
- Co log/metric de debug khi co su co.

## Quyet dinh ky thuat hien tai
- **Khong chon all-in Vercel cho backend** vi NestJS app hien tai la long-running server va chat platform co WebSocket/realtime.
- **Prisma 7** dang dung driver adapter model, nen connection pooling nam o adapter/connection layer, khong phai theo kieu Prisma engine cu.
- **Database package** la source of truth cho schema va generated client.

## Thu tu uu tien
1. Auth
2. Core chat data model
3. Realtime
4. Attachments
5. Search va unread
6. Hardening va observability

## Ngay can tranh
- Khong build voice/video truoc khi text chat chay on.
- Khong dua file attachment vao database.
- Khong day backend Nest long-running len Vercel neu chua co kiem soat runtime ro rang.
- Khong o too much vao client UI khi backend core chua xong.
