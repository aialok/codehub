const dummyData = [
  {
    title: "Two Sum",
    description:
      "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.",
    input: "nums = [2,7,11,15], target = 9",
    output: "[0,1]",
    sampleInput: ["[2,7,11,15], 9", "[3,2,4], 6", "[3,3], 6"],
    sampleOutput: ["[0,1]", "[1,2]", "[0,1]"],
    topics: ["Array", "Hash Table", "Two Pointers"],
    submissions: 352,
  },
  {
    title: "Add Two Numbers",
    description:
      "You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.",
    input: "l1 = [2,4,3], l2 = [5,6,4]",
    output: "[7,0,8]",
    sampleInput: [
      "[2,4,3], [5,6,4]",
      "[0], [0]",
      "[9,9,9,9,9,9,9111111111111111111111111111111111], [9,9,9,9]",
    ],
    sampleOutput: ["[7,0,8]", "[0]", "[8,9,9,9,0,0,0,1]"],
    topics: ["Linked List", "Math", "Recursion"],
    submissions: 129,
  },
  {
    title: "Longest Substring Without Repeating Characters I am a very long title",
    description:
      "Given a string s, find the length of the longest substring without repeating characters.",
    input: "s = 'abcabcbb'",
    output: "3",
    sampleInput: ["'abcabcbb'", "'bbbbb'", "'pwwkew'"],
    sampleOutput: ["3", "1", "3"],
    topics: ["String", "Two Pointers", "Sliding Window"],
    submissions: 215,
  },
  {
    title: "Median of Two Sorted Arrays",
    description:
      "Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.",
    input: "nums1 = [1,3], nums2 = [2]",
    output: "2.0",
    sampleInput: ["[1,3], [2]", "[1,2], [3,4]", "[0,0], [0,0]"],
    sampleOutput: ["2.0", "2.5", "0.0"],
    topics: ["Array", "Binary Search", "Divide and Conquer"],
    submissions: 412,
  },
  {
    title: "Container With Most Water",
    description:
      "Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai). n vertical lines are drawn such that the two endpoints of the line i is at (i, ai) and (i, 0). Find two lines, which, together with the x-axis forms a container, such that the container contains the most water.",
    input: "[1,8,6,2,5,4,8,3,7]",
    output: "49",
    sampleInput: ["[1,8,6,2,5,4,8,3,7]", "[1,1]", "[4,3,2,1,4]", "[1,2,1]"],
    sampleOutput: ["49", "1", "16", "2"],
    topics: ["Array", "Two Pointers"],
    submissions: 572,
  },
  {
    title: "Longest Palindromic Substring",
    description:
      "Given a string s, return the longest palindromic substring in s.",
    input: "s = 'babad'",
    output: "'bab' or 'aba'",
    sampleInput: ["'babad'", "'cbbd'", "'a'"],
    sampleOutput: ["'bab'", "'bb'", "'a'"],
    topics: ["String", "Dynamic Programming"],
    submissions: 201,
  },
];

export default dummyData;
