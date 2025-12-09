export interface Friend {
  name: string;
  url: string;
  avatar: string;
  description: string;
}

export interface FriendsData {
  friends: Friend[];
}