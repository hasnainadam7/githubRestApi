import React, { useState } from 'react'
import { Modal } from './Modal'
import { isVisible } from '@testing-library/user-event/dist/utils';
export const List = ({ data }) => {
  var [show, setShow] = useState(false)
  const toggleVisibility = () => {
    setShow((show)=>!show);
  }
  var [user, setUser] = useState()

  var { items } = data

  return (
    <>
      <div style={{ width: '450px', height: '300px', overflow: 'auto', }}>
        <table >
          <thead>
            <tr>
              <th>
                <h1>Imgs</h1>
              </th>
              <th>
                <h1>
                  UserNames
                </h1>
              </th>
              <th>
                GithubUrls
              </th>
            </tr>
          </thead>
          <tbody>
            {
              items?.map((node) => {
                return (
                  <>
                    <tr>
                      <td>
                        <img src={node.avatar_url} alt=""
                          style={{ width: "30px", height: "30px", borderRadius: "15px" }}
                          srcset="" />
                      </td>
                      <td>
                        <h2 style={{ textAlign: "center" }}>{node.login}</h2>
                      </td><td>
                        <h1 style={{ textAlign: "center" }} >
                          <button href={node.html_url} 
                          onClick={
                            () => {
                              setShow(true)
                              setUser(node.login)}} >{node.html_url}</button>

                        </h1>
                      </td>
                    </tr>


                  </>
                )
              }
              )}
          </tbody>

        </table>

      </div>
      <button className="button-3" onClick={toggleVisibility}>{!show? "Open":"Hide"}</button>
      {show && <Modal data={user} />}




    </>
  )

}

