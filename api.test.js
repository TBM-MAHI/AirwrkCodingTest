const express = require("express");
const app = require('./server');

const request = require("supertest");

describe("TEST POST /analyze ", () => {
  let validData = {
    text: "The quick brown fox jumps over the lazy dog. The dog was not amused.",
  };
  let invalidData = {
    text: 999,
    };
    let emptyData = {};
  let errorMessage1 = {
    message: "Invalid Input",
  };

  test("it should respond with 200 success", () => {
      request(app)
          .post("/v1/analyze")
          .send(validData)
          .expect(200)
          .expect("content-type", /json/)
          .end(function (err, res) {
              if (err) return done(err);
              return done();
          });
  });

  test("it should detect invalid input",  () => {
    request(app)
      .post("/v1/analyze")
      .send(invalidData)
      .expect(400)
      .expect("content-type", /json/)
      .end(function (err, res) {
        if (err) return done(err);
        return done();
      });;
});
    
  test("it should detect empty input",  () => {
      request(app)
          .post("/v1/analyze")
          .send(emptyData)
          .expect(400)
          .expect("content-type", /json/)
          .end(function (err, res) {
              if (err) return done(err);
              return done();
          });
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
  const expectedSimilarity1 = 32.5;
    const expectedSimilarity2 = 0.0;
    
  test("Calculate similarity for two strings", () => {
    return request(app)
      .post("/v1/similarity")
      .send(validData1)
      .expect("Content-Type", /json/)
      .expect(200)
      .then((response) =>
        expect(response.body.similarity).toBeCloseTo(expectedSimilarity1, 2)
      );
  });
    test("Calculate similarity with an empty string", () => {
      
    return request(app)
      .post("/v1/similarity")
      .send(validData2)
      .expect("Content-Type", /json/)
      .expect(200)
      .then((response) =>
        expect(response.body.similarity).toBeCloseTo(expectedSimilarity2, 2)
      );
  });
    
    
});