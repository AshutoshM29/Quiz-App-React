import { fetchQues } from "./fetchQues";
import axios from "axios"

jest.mock('axios')



describe("get quiz", () => {
    test("should return quiz when API call is successful", async () => {
      (axios.get as jest.Mock).mockResolvedValue({
        data: {
          results: [
            {
              category: "General Knowledge",
              type: "easy",
              difficulty: "medium",
              correct_answer: "Skin",
              incorrect_answer: ["Liver", "large Intestine", "Heart"],
            },
          ],
        },
      });
      const ques = await fetchQues(9);
      expect(ques).toEqual({
        results:
        [
          {
            category: "General Knowledge",
            type: "easy",
            difficulty: "medium",
            correct_answer: "Skin",
            incorrect_answer: ["Liver", "large Intestine", "Heart"],
          }
        ]
      }
  );
    });
  
    test("should return errorMessage when API is call fails", async () => {
      (axios.get as jest.Mock).mockResolvedValue({error:{
        response:undefined
      }});
      const ques = await fetchQues(9);
      expect(ques).toEqual(undefined);
    });
  });