# Вказуємо базовий образ Cypress
FROM cypress/browsers:node-20.9.0-chrome-118.0.5993.88-1-ff-118.0.2-edge-118.0.2088.46-1

# Встановлюємо робочу директорію
WORKDIR /app

# Копіюємо файли package.json та package-lock.json (якщо є)
COPY package*.json ./

# Встановлюємо залежності
RUN npm install

# Копіюємо весь проект у робочу директорію контейнера
COPY . .

# Вказуємо команду для запуску тестів Cypress
CMD ["npx", "cypress", "run"]
