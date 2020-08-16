import getFirebase from "./firebase";

const db = getFirebase().firestore();

// Boolean will turn to true if completed
export interface DbSchema {
  matricNumber?: string;
  timeCompleted?: Date;
  stationData?: {
    "Min Hern"?: boolean;
    "Wai Siang"?: boolean;
    Adrian?: boolean;
    Benedict?: boolean;
    Chloe?: boolean;
    Donald?: boolean;
    Gregory?: boolean;
    Haris: number;
    Kingston?: boolean;
    Maneesha: boolean;
    Punnag?: number;
    Samantha?: boolean;
    Svarnim?: boolean;
  };
}

export async function updateUser(uid: string, data: DbSchema) {
  let isSuccess = false;

  while (!isSuccess) {
    try {
      await db.collection("users").doc(uid).set(data, { merge: true });
      isSuccess = true;
    } catch {
      // retry till success
      console.log("Retry update user");
    }
  }
}

export async function updateStationData(
  uid: string,
  name: string,
  value: boolean | number
) {
  let isSuccess = false;

  while (!isSuccess) {
    try {
      await db.collection("users").doc(uid).set({}, { merge: true }); // ensure user has single document

      if (typeof value === "number") {
        const currValue = await getUser(uid);

        // Do not update if prev score is higher
        const shouldUpdate =
          currValue.stationData === undefined ||
          currValue.stationData[name] === undefined ||
          currValue.stationData[name] < value;

        if (!shouldUpdate) {
          return;
        }
      }
      await db
        .collection("users")
        .doc(uid)
        .update({ [`stationData.${name}`]: value });
      isSuccess = true;
    } catch {
      // retry till success
      console.log("Retry update station data");
    }
  }
}

export async function getUser(uid: string): Promise<DbSchema> {
  while (true) {
    try {
      return (await db.collection("users").doc(uid).get()).data();
    } catch {
      // retry till success
      console.log("Retry get user");
    }
  }
}

export function getNumberOfNpcsCleared() {
  const playerData: DbSchema = JSON.parse(sessionStorage.getItem("userData"));
  if (playerData === undefined || playerData.stationData === undefined) {
    return 0;
  }

  const { stationData } = playerData;
  return [
    stationData.Adrian,
    stationData.Benedict,
    stationData.Chloe,
    stationData.Donald,
    stationData.Gregory,
    stationData.Kingston,
    stationData["Min Hein"],
    stationData.Samantha,
    stationData.Svarnim,
    stationData["Wai Siang"],
  ].filter((data: any) => data || data === 0).length;
}

export function getIsBossRoomUnlocked(): boolean {
  return getNumberOfNpcsCleared() === 10;
}

export function getNumberOfBossesCleared() {
  const playerData: DbSchema = JSON.parse(sessionStorage.getItem("userData"));
  if (playerData === undefined || playerData.stationData === undefined) {
    return 0;
  }

  const { stationData } = playerData;
  return [stationData.Haris, stationData.Punnag, stationData.Maneesha].filter(
    (data: any) => data || data === 0
  ).length;
}

export function getIsGameCompleted() {
  return getNumberOfNpcsCleared() === 10 && getNumberOfBossesCleared() === 3;
}
