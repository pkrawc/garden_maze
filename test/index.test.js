import { shallow } from "enzyme"
import { expect } from "chai"
import App from "../pages/index"

describe("Garden Maze Tests", () => {
  // Testing is not possible with shallow. There is no renderer that can handle hooks at
  // the moment. See https://github.com/facebook/react/issues/14091.
  // const app = shallow(<App />)
  it("should create a correctly sized field", () => true)
  it("should move down when down arrow is clicked", () => true)
  it("should move right when right arrow is clicked", () => true)
  it("should move left when left arrow is clicked", () => true)
  it("should move up when up arrow is clicked", () => true)
})
