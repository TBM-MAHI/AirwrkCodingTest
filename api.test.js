const app = require("./app");

const request = require("supertest");

describe("TEST POST /analyze ", () => {
  let validData = {
    text: "The quick brown fox jumps over the lazy dog. The dog was not amused.",
  };
  let validResponse = {
    charCount: 53,
    wordsCount: 14,
    sentenceCount: 2,
    mostFrequentWord: {
      frequency: 3,
      word: "the",
    },
    longestWord: {
      word: "amused",
      length: 6,
    },
  };

  let invalidData = {
    text: 999,
  };
  let invalidErrorMessage = {
    message: "Invalid Input",
  };

  let emptyInput = {};
  let emptyInputError = {
    message: "Input empty!",
  };

  test("it should respond with 200 success", () => {
    return request(app)
      .post("/v1/analyze")
      .send(validData)
      .expect(200)
      .expect("content-type", /json/)
      .then((res) => expect(res.body).toEqual(validResponse));
  });

  test("it should detect invalid input", () => {
    return request(app)
      .post("/v1/analyze")
      .send(invalidData)
      .expect(400)
      .expect("content-type", /json/)
      .then(res => expect(res.body).toEqual(invalidErrorMessage));
  });

  test("it should detect empty input", () => {
    return request(app)
      .post("/v1/analyze")
      .send(emptyInput)
      .expect(400)
      .expect("content-type", /json/)
      .then(res => expect(res.body).toEqual(emptyInputError));
  });
});

describe("TEST POST /similarity ", () => {
  let validData1 = {
    text1: "The quick brown fox jumps over the lazy dog",
    text2: "The dog was not amused",
  };
  let validData2 = {
    text1: "The quick brown fox jumps over the lazy dog",
    text2: "",
  };
  let inValidData = {
    text1: 6565,
    text2: "",
  };
  const expectedSimilarity1 = 32.5;
  const expectedSimilarity2 = 0.0;
  let invalidErrorMessage = {
    message: "Invalid Input!",
  };

  test("calculate similarity for two strings-Normal Case ", () => {
    return request(app)
      .post("/v1/similarity")
      .send(validData1)
      .expect("Content-Type", /json/)
      .expect(200)
      .then((response) =>
        expect(response.body.similarity).toBeCloseTo(expectedSimilarity1, 2)
      );
  });

  test("calculate similarity for two strings with an empty string", () => {
    return request(app)
      .post("/v1/similarity")
      .send(validData2)
      .expect("Content-Type", /json/)
      .expect(200)
      .then((response) =>
        expect(response.body.similarity).toBeCloseTo(expectedSimilarity2, 2)
      );
  });

  test('calculate similarity for two strings with Invalid Data', () => {
    return request(app)
      .post("/v1/similarity")
      .send(inValidData)
      .expect("Content-Type", /json/)
      .expect(400)
      .then((res) => expect(res.body).toEqual(invalidErrorMessage));
  });

});
