import Heap from './heap';

/**
 * @typedef {Object} TwitterInfo - creates a new type named TwitterInfo
 * @property {number} tweetId - twitter id
 * @property {number} timestamp - timestamp value
 */

/**
 * @template T
 * @param {T | undefined} val
 * @param {LinkedNode.<T> | undefined} next
 */
function LinkedNode(val, next) {
  this.val = val === undefined ? null : val;
  this.next = val === undefined ? null : next;
}

var Twitter = function () {
  this.timestamp = 0;
  this.follows = new Map();
};

/**
 * @param {number} userId
 * @return {{ users: Set, tweets: LinkedNode.<TwitterInfo> }}
 */
Twitter.prototype.getUser = function (userId) {
  let user = this.follows.get(userId);
  if (!user) {
    const users = new Set();
    users.add(userId);
    user = {
      users,
      tweets: new LinkedNode(),
    };
    this.follows.set(userId, user);
  }
  return user;
};

/**
 * @param {number} userId
 * @param {number} tweetId
 * @return {void}
 */
Twitter.prototype.postTweet = function (userId, tweetId) {
  const user = this.getUser(userId);
  const node = new LinkedNode({ tweetId, timestamp: this.timestamp }, user.tweets.next);
  user.tweets.next = node;
  this.timestamp += 1;
};

/**
 * @param {number} userId
 * @return {number[]}
 */
Twitter.prototype.getNewsFeed = function (userId) {
  const currentUser = this.getUser(userId);

  const tweetNodes = [];
  currentUser.users.forEach((val) => tweetNodes.push(this.getUser(val).tweets.next));

  const { down } = new Heap(tweetNodes, tweetNodes.length, (x, y) => {
    if (!x && !y) return 0;
    if (!x) return 1;
    if (!y) return -1;

    return y.val.timestamp - x.val.timestamp;
  });

  const res = [];
  for (let i = 0; i < 10; i++) {
    if (!tweetNodes[0]) break;

    res.push(tweetNodes[0].val.tweetId);
    tweetNodes[0] = tweetNodes[0].next;
    down(0);
  }
  return res;
};

/**
 * @param {number} followerId
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.follow = function (followerId, followeeId) {
  const user = this.getUser(followerId);
  user.users.add(followeeId);
};

/**
 * @param {number} followerId
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.unfollow = function (followerId, followeeId) {
  const user = this.getUser(followerId);
  user.users.delete(followeeId);
};

/**
 * Your Twitter object will be instantiated and called as such:
 * var obj = new Twitter()
 * obj.postTweet(userId,tweetId)
 * var param_2 = obj.getNewsFeed(userId)
 * obj.follow(followerId,followeeId)
 * obj.unfollow(followerId,followeeId)
 */

/**
 * @param {string[]} names;
 * @param {number[][]} data
 */
const polyfill = (names, data) => {
  let obj;

  const res = [];
  names.forEach((name, i) => {
    switch (name) {
      case 'Twitter':
        obj = new Twitter();
        res.push(null);
        break;
      case 'postTweet':
        obj.postTweet.apply(obj, data[i]);
        res.push(null);
        break;
      case 'getNewsFeed':
        res.push(obj.getNewsFeed.apply(obj, data[i]));
        break;
      case 'follow':
        obj.follow.apply(obj, data[i]);
        res.push(null);
        break;
      case 'unfollow':
        obj.unfollow.apply(obj, data[i]);
        res.push(null);
        break;
      default:
        break;
    }
  });
  console.log(res);
};

// [null, null, [5], null, null, [6, 5], null, [5]]
polyfill(
  ['Twitter', 'postTweet', 'getNewsFeed', 'follow', 'postTweet', 'getNewsFeed', 'unfollow', 'getNewsFeed'],
  [[], [1, 5], [1], [1, 2], [2, 6], [1], [1, 2], [1]]
);

// [null, null, [1], null, [1], null, []];
polyfill(
  ['Twitter', 'postTweet', 'getNewsFeed', 'follow', 'getNewsFeed', 'unfollow', 'getNewsFeed'],
  [[], [1, 1], [1], [2, 1], [2], [2, 1], [2]]
);

// [null, null, null, null, null, null, null, null, null, null, [333, 505, 94, 2, 10, 13, 101, 3, 5]];
polyfill(
  [
    'Twitter',
    'postTweet',
    'postTweet',
    'postTweet',
    'postTweet',
    'postTweet',
    'postTweet',
    'postTweet',
    'postTweet',
    'postTweet',
    'getNewsFeed',
  ],
  [[], [1, 5], [1, 3], [1, 101], [1, 13], [1, 10], [1, 2], [1, 94], [1, 505], [1, 333], [1]]
);
