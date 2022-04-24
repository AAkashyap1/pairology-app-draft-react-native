import { Person } from "./types";
import { createReadStream } from "fs";
import path from "path";
import csv from "csv-parser";

function getField(major: string): string | null {
  const majors = global.schoolMajors;
  return majors.find((x) => x.Major === major)?.["Field of study"] ?? null;
}

function getGeneralArea(major: string): string | null {
  return global.schoolMajors.find((x) => x.Major === major)?.Category ?? null;
}

async function majorIsInSameFieldStudy(m1: string, m2: string) {
  return getField(m1) === getField(m2) && getField(m1) !== null;
}
async function majorIsInSameGeneralArea(m1: string, m2: string) {
  return (
    getGeneralArea(m1) === getGeneralArea(m2) && getGeneralArea(m1) !== null
  );
}

function getExtScore(x: Person) {
  return (
    0.5 * (x.laugh - 3) +
    -1 * (x.attention - 3) +
    -1 * (x.quiet - 3) +
    1 * (x.outgoing - 3) +
    1 * (x.friends - 3)
  );
}

function getOpenScore(x: Person) {
  return x.abstract - 3 + (x.reflect - 3) + (x.imagination - 3) - (x.noArt - 3);
}

export async function calcScore(A: Person, B: Person): Promise<number> {
  const miscScoreKeys = [
    "truth",
    "leftRight",
    "fit",
    "plan",
    "religion",
    "eat",
    "politicallyIncorrect",
    "careOthersThink",
    "highPaying",
    "gutFeeling",
    "socialJustice",
    "jeffBezos",
    "superstitious",
  ];
  let miscScore = 0;
  for (let key of miscScoreKeys) {
    miscScore += Math.abs(A[key] - B[key]);
  }
  miscScore += 3 * Math.abs(A.polLeaning - B.polLeaning);
  miscScore += 2 * Math.abs(A.socialJustice - B.socialJustice);

  let interestScore = 0;
  if (await majorIsInSameGeneralArea(A.major, B.major)) interestScore += 1.5;
  if (await majorIsInSameFieldStudy(A.major, B.major)) interestScore += 1.5;
  if (A.major === B.major) interestScore += 1.5;
  
  if (A.interests != undefined && B.interests != undefined) {
    for (let interest of A.interests) {
      if (B.interests.includes(interest)) interestScore += 3;
    }
  }

  return (
    12 * Math.abs(getExtScore(A) - getExtScore(B)) +
    8 * Math.abs(getOpenScore(A) - getOpenScore(B)) -
    13 * interestScore +
    miscScore
  );
}