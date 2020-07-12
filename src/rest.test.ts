import { fetchData, ResponseData } from "./rest";
import axios, { AxiosResponse } from "axios";

// axiosをmock設定する
jest.mock("axios");
const mockAxios = axios as jest.Mocked<typeof axios>;

test("Httpステータスコードが200の時はデータが返ること", async () => {
  mockAxios.get.mockResolvedValue({
    status: 200,
    data: [{ id: 1, text: "test result" }],
  });

  const response = await fetchData(1);
  expect(mockAxios.get).toHaveBeenCalled();
  expect(response).toStrictEqual({
    status: 200,
    data: [{ id: 1, text: "test result" }],
  });
});

test("Httpステータスコードが404の時は配列を返す", async () => {
  mockAxios.get.mockResolvedValue({ status: 404 });
  const response = await fetchData(1);
  expect(mockAxios.get).toHaveBeenCalled();
  expect(response).toStrictEqual({ status: 404, data: [] });
});

describe("Testing", () => {
  beforeAll(() => {
    console.log("全体で一回の前処理");
  });
  afterAll(() => {
    console.log("全体で一回の後処理");
  });
  beforeEach(() => {
    console.log("テストごとの前処理");
  });
  afterEach(() => {
    console.log("テストごとの後処理");
  });
  describe("fetchDataのテスト", () => {
    describe("正常系", () => {
      it("Httpステータスコードが200の時にデータを返す", async () => {
        mockAxios.get.mockResolvedValue({
          status: 200,
          data: [{ id: 1, text: "test result" }],
        });

        const response = await fetchData(1);
        expect(mockAxios.get).toHaveBeenCalled();
        expect(response).toStrictEqual({
          status: 200,
          data: [{ id: 1, text: "test result" }],
        });
      });
    });

    describe("異常系", () => {
      it("Httpステータスのコードが404の時は空の配列を返す", async () => {
        mockAxios.get.mockResolvedValue({ status: 404 });
        const response = await fetchData(1);
        expect(mockAxios.get).toHaveBeenCalled();
        expect(response).toStrictEqual({ status: 404, data: [] });
      });
    });
  });
});
