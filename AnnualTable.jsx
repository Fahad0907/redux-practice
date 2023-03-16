import React from "react";
import Oddtext from "../UserDetails/Oddtext";
import styles from "./AnnualPass.module.css";
import { usePagination } from "../Hooks/Pagiante";
import { data } from "./DummyData";
import { Pagination } from "@mui/material";
const AnnualTable = ({ annualPassList }) => {
  const [totalPages, startPageIndex, endPageIndex, currentPage, dispPage] =
    usePagination(20, annualPassList?.length);

  console.log(annualPassList);
  return (
    <div className={styles.annualtable}>
      <h6 className={styles.annTitle}>
        年間パス一覧 <Oddtext />
      </h6>
      {annualPassList && (
        <table className={styles.table}>
          <tr className={styles.tr}>
            <th className={styles.th}>
              顧客番号 <Oddtext />
            </th>
            <th className={styles.th}>
              氏名 <Oddtext />
            </th>
            <th className={styles.th}>
              年数 <Oddtext />
            </th>
            <th className={styles.th}>
              購入日 <Oddtext />
            </th>
            <th className={styles.th}>
              期限 <Oddtext />
            </th>
            <th className={styles.th}>
              利用GB数 <Oddtext />
            </th>
            <th className={styles.th}>
              メール <Oddtext />
            </th>
          </tr>
          {(() => {
            const display = [];
            for (
              let i = startPageIndex;
              i <= endPageIndex && i <= annualPassList.length - 1;
              i++
            ) {
              display.push(
                <tr className={styles.tr}>
                  <td className={styles.td}>
                    {annualPassList[i].user.user_code} <Oddtext />
                  </td>
                  <td className={`${styles.orderid} ${styles.td}`}>
                    <h6>
                      {annualPassList[i].user.kanji_first_name} <Oddtext />
                    </h6>
                  </td>
                  <td className={styles.td}>
                    will be added <Oddtext />
                  </td>
                  <td className={styles.td}>
                    {annualPassList[i].buy_date} <Oddtext />
                  </td>
                  <td className={styles.td}>
                    {annualPassList[i].expiry_date} <Oddtext />
                  </td>
                  <td className={styles.td}>
                    {annualPassList[i].storage} <Oddtext />
                  </td>
                  <td className={styles.td}>
                    {annualPassList[i].user.user_code} <Oddtext />
                  </td>
                </tr>
              );
            }
            return display;
          })()}
        </table>
      )}
      <div className={styles.paginate}>
        <h6>
          前へ <Oddtext />
        </h6>
        <Pagination
          count={totalPages}
          shape="rounded"
          color="primary"
          onChange={(event, value) => dispPage(value)}
        />
        <h6>
          次へ <Oddtext />
        </h6>
      </div>
    </div>
  );
};

export default AnnualTable;
