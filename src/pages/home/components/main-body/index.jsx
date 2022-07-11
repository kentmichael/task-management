import React from "react"
import { useSelector } from "react-redux"
import StyledStackMain from "./styles/StyledStackMain"
import StyledGridContainer from "./styles/StyledGridContainer"
import StyledGridItem from "./styles/StyledGridItem"
import StyledColumnTitle from "./styles/StyledColumnTitle"
import StyledPaperTask from "./styles/StyledPaperTask"
import StyledPaperTitle from "./styles/StyledPaperTitle"

const MainBody = ({ openSideNav }) => {
  const appData = useSelector((state) => state.appData)
  const {
    isLoading,
    data: { boards },
    errorMessage,
  } = appData

  return (
    <StyledStackMain openSideNav={openSideNav}>
      <StyledGridContainer>
        {isLoading ? (
          <h3>Loading data..</h3>
        ) : errorMessage ? (
          <h3>{errorMessage}</h3>
        ) : (
          boards?.map((board) => {
            // match with the id of the selected board
            if (board.id === 1) {
              {
                return board.columns.map((column) => {
                  return (
                    <StyledGridItem key={column.id}>
                      <StyledColumnTitle>
                        {column.colName} ({column.tasks.length})
                      </StyledColumnTitle>
                      {column.tasks.map((task) => {
                        return (
                          <StyledPaperTask key={task.id}>
                            <StyledPaperTitle>{task.title}</StyledPaperTitle>
                          </StyledPaperTask>
                        )
                      })}
                    </StyledGridItem>
                  )
                })
              }
            }
          })
        )}
      </StyledGridContainer>
    </StyledStackMain>
  )
}

export default MainBody
