import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { ref, computed, onMounted, onUnmounted } from 'vue';
import { getStorage } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";


//added the configuration directly into the initialization
;
export const firebaseApp = initializeApp({
  apiKey: "AIzaSyAag9j8H--9ud3THoMCelP5Cl7VC2pr1RM",
  authDomain: "magaonischool-1a.firebaseapp.com",
  projectId: "magaonischool-1a",
  storageBucket: "magaonischool-1a.appspot.com",
  messagingSenderId: "669012241572",
  appId: "1:669012241572:web:17dc0b167679e64a988a31",
  measurementId: "G-26TVKGBQXV"
});
const analytics = getAnalytics(firebaseApp);

export const storage = getStorage(firebaseApp);

export const getUserState = () =>
  new Promise((resolve, reject) =>
    onAuthStateChanged(getAuth(), resolve, reject)
  )

export const useAuthState = () => {
  const user = ref(null)
  const error = ref(null)

  const auth = getAuth()
  let unsubscribe
  onMounted(() => {
    unsubscribe = onAuthStateChanged(
      auth,
      u => (user.value = u),
      e => (error.value = e)
    )
  })
  onUnmounted(() => unsubscribe())

  const isAuthenticated = computed(() => user.value != null)

  return { user, error, isAuthenticated }
}