# 🎵 Moodify – Mood-Based Music Recommender App

**Moodify** is a React Native mobile app that recommends music based on your current mood. Whether you're feeling happy, sad, energetic, or chill — let your vibe choose the playlist.

---

## 🚀 Features

- 🎭 **Mood Selection** – Choose your current mood from a list (e.g., Happy, Sad, Energetic, Relaxed)
- 🎷 **Smart Recommendations** – Get personalized tracks/playlists using the Spotify API
- 📎 **Save Favorites** – Bookmark your favorite tracks
- 🌗 **Dark Mode** – Because vibes change with the lights off
- 🔥 **(Optional)** Emotion detection via camera (face-based mood analysis)

---

## 💠 Tech Stack

- **React Native** – Cross-platform mobile app development
- **Expo** – Fast development and camera access
- **Spotify Web API** – To fetch music based on mood tags
- **AsyncStorage** – To save favorite songs locally
- *(Optional)* **ML Kit / Emotion API** – Face-based emotion recognition

---

## 📸 Screenshots

_Add screenshots here once available._

---

## 🧐 Mood-to-Genre Mapping

| Mood      | Genre Tags              |
|-----------|-------------------------|
| Happy     | pop, dance, indie-pop   |
| Sad       | acoustic, piano, emo    |
| Energetic | edm, workout, hip-hop   |
| Relaxed   | chill, lo-fi, ambient   |

---

## 🔐 Setup & Authentication

1. Create a Spotify Developer account: [https://developer.spotify.com](https://developer.spotify.com)
2. Register your app and get your **Client ID** and **Client Secret**
3. Create a `.env` file and add:

```env
SPOTIFY_CLIENT_ID=your_client_id
SPOTIFY_CLIENT_SECRET=your_client_secret
SPOTIFY_REDIRECT_URI=your_redirect_uri
```

4. Use [`react-native-app-auth`](https://github.com/FormidableLabs/react-native-app-auth) or similar for OAuth2 integration

---

## 🧪 How to Run

```bash
git clone https://github.com/yourusername/moodify.git
npm install
npx expo start
```

> 📱 Open with Expo Go on your mobile device to test!

---

## 💡 Future Ideas

- 🎧 Voice input for mood detection
- 📅 Mood calendar to track trends over time
- 🔄 Shuffle moods or mix playlists
- 🔔 Daily push notifications with mood-based music

---

## 🙌 Credits

- Built with ❤️ using React Native + Spotify
- Icons by [Phosphor Icons](https://phosphoricons.com/)
- Music intelligence powered by Spotify Web API

---

## 📄 License

MIT License. Do what you want — just vibe responsibly.
