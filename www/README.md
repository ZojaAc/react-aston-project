## Beer store (React-project with Punk API)

### Для корректного отображения стилей установите sass `npm install node-sass`

**************

### **Выполнены требования:**
#### **React**
* Пишем функциональные компоненты c хуками в приоритете над классовыми ✔️
* Есть четкое разделение на умные и глупые компоненты ✔️
* Есть рендеринг списков ✔️ [Home](https://github.com/ZojaAc/react-aston-project/blob/main/src/containers/Home.jsx)
* Реализована хотя бы одна форма ✔️ [SignIn & SignUp](https://github.com/ZojaAc/react-aston-project/blob/main/src/containers/FormTemplate.jsx)
* Есть применение Контекст API ✔️ [Card with details](https://github.com/ZojaAc/react-aston-project/blob/main/src/components/HomeCards.js)
* Есть применение предохранителя ✔️ [Layout](https://github.com/ZojaAc/react-aston-project/blob/main/src/App.js), [ErrorBoundary](https://github.com/ZojaAc/react-aston-project/blob/main/src/utility/errorBoundary.js)
* Есть хотя бы один кастомный хук ✔️ [hook](https://github.com/ZojaAc/react-aston-project/blob/main/src/components/Header.js)
* Хотя бы несколько компонентов используют PropTypes ✔️ [CardsLists](https://github.com/ZojaAc/react-aston-project/blob/main/src/components/CardItem.js), [Favorites](https://github.com/ZojaAc/react-aston-project/blob/main/src/components/Favorites.js), [Card with details](https://github.com/ZojaAc/react-aston-project/blob/main/src/components/HomeCards.js)
* Поиск не должен триггерить много запросов к серверу ✔️ [HomeSearch](https://github.com/ZojaAc/react-aston-project/blob/main/src/containers/Home.jsx)

#### **Redux**
* Используем Modern Redux with Redux Toolkit ✔️ [store](https://github.com/ZojaAc/react-aston-project/blob/main/src/store/store.js)
* Используем слайсы ✔️ [User](https://github.com/ZojaAc/react-aston-project/blob/main/src/store/userSlice.js)
* Есть хотя бы одна кастомная мидлвара ✔️ [HistoryStorage](https://github.com/ZojaAc/react-aston-project/blob/main/src/store/middleware.js)
* Используется RTK Query ✔️ [API request for SearchHistoryList](https://github.com/ZojaAc/react-aston-project/blob/main/src/request/apiRequest.js), [HistoryList](https://github.com/ZojaAc/react-aston-project/blob/main/src/components/History.js)
* Используется Transforming Responses
