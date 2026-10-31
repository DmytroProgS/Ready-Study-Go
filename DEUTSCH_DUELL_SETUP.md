# Deutsch Duell — MVP setup

The game is available at `#/deutsch-duell` and uses the existing Firebase Authentication and Cloud Firestore.

## Before testing: Firestore security rules

The web app alone cannot grant access to the `duelRooms` collection. In Firebase Console → Firestore Database → Rules, **merge** the following `match` block inside the existing `match /databases/{database}/documents` block. Do not replace the existing rules for `users/{uid}`, because the Trainer depends on them.

```
match /duelRooms/{roomCode} {
  allow create: if request.auth != null
    && request.resource.data.host == request.auth.uid
    && request.resource.data.players.keys().hasOnly([request.auth.uid])
    && request.resource.data.status == 'lobby';
  allow read: if request.auth != null
    && request.auth.uid in resource.data.players.keys();
  allow update: if request.auth != null
    && request.auth.uid in resource.data.players.keys()
    && request.resource.data.host == resource.data.host
    && request.resource.data.players.keys().hasAll(resource.data.players.keys())
    && request.resource.data.players.size() <= 2;
  allow delete: if false;
}
```

**Joining needs a special rule:** Firestore reads are denied to users not yet in the room, and the current client joins via a transaction that reads the room first. To support join-by-code, replace the `allow read` line above with `allow get: if request.auth != null; allow list: if false;`. This exposes room data to any signed-in user who knows its six-character code. Use only for a private prototype. For a production-ready public game, move joining and authoritative scoring to a trusted backend (Cloud Functions) and enforce ownership of each answer.

This prototype does not save long-term statistics. Room documents store answers and scores for the current game only. Both users must log in with existing accounts. The host creates a room, the guest joins by code, and both answer the same 20 questions. Both answers are required before feedback; both press Next to advance.

**Do not publish permissive `allow read, write: if true` rules.** Existing rules must be retained.
