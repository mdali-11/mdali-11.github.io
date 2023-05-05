import React from "react";
import "./Skills.css";



export default function Skills() {

  return (
    <>
      <div className="skillss">
        <section id="skills"></section>
        <h1 align="center" style={{ color: "black", fontSize: "2.5rem" }}>Skills</h1>
        <div className="techsection">
          <div>
            {/* <SiJavascript /> */}
            <img src="https://meesahil7.github.io/static/media/html.c1bb84e022ca9d76984d4b943bd678fd.svg" alt="" />
            <h3>HTML</h3>
          </div>
          <div>
            {/* <SiHtml5 /> */}
            <img src="https://meesahil7.github.io/static/media/css.3ec320225ef851ed26cf9fd1c6ebaa54.svg" alt="" />
            <h3>CSS</h3>
          </div>
          <div>
            {/* <DiCss3 /> */}
            <img src="https://meesahil7.github.io/static/media/javascript.94eea64c47f8d2d01bb375bfeb4378a3.svg" alt="" />
            <h3>Javascript</h3>
          </div>
          <div>
            {/* <FaReact /> */}
            <img style={{ width: "80%", margin: "auto" }} src="https://meesahil7.github.io/static/media/mongodb.b508609b24c1a2bc58576411df58bb4b.svg" alt="" />
            <h3>Mongo DB</h3>
          </div>
          <div>
            {/* <FaNodeJs /> */}
            <img src="https://meesahil7.github.io/static/media/expressjs.28c1c5186045f0e2975a04513a24e2a2.svg" alt="" />
            <h3>Express JS</h3>
          </div>
          <div>
            {/* <DiMongodb /> */}
            <img src="https://meesahil7.github.io/static/media/react.a060cbe85e50deda1d61452cee9de5b2.svg" alt="" />
            <h3>React</h3>
          </div>
          <div>
            {/* <VscGithub /> */}
            <img src="https://meesahil7.github.io/static/media/nodejs.d39adae080cb59077b8c3a842bfd959c.svg" alt="" />
            <h3>Node JS</h3>
          </div>

          <div>
            {/* <SiExpress /> */}
            <img src="data:image/png;base64,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" alt="" />
            <h3>Github</h3>
          </div>

          <div>
            {/* <FaAws /> */}
            <img src="https://meesahil7.github.io/static/media/npm.8c0606a7c392a7d33d03e67c80d6f40a.svg" alt="" />
            <h3>NPM</h3>
          </div>
          <div>
            {/* <BsBootstrap /> */}
            <img src="https://meesahil7.github.io/static/media/redux.0a4a6ca2be44339bedb69de15f66d243.svg" alt="" />
            <h3>Redux</h3>
          </div>
          <div>
            {/* <BsWordpress /> */}
            <img src="https://meesahil7.github.io/static/media/typescript.f20748caf2dac55710ddeed71de0bac4.svg" alt="" />
            <h3>TypeScript</h3>
          </div>
          <div>
            {/* <SiHeroku /> */}
            <img src="https://meesahil7.github.io/static/media/chakra-ui.3cc0dcf33272ae6294329e6a24f995e9.svg" alt="" />
            <h3>Chakra UI</h3>
          </div>
        </div>

        <h1 align="center" style={{ color: "white", fontSize: "2.5rem", marginTop:"50px" }}>Tools</h1>

        <div className="techsection">
          <div>
            {/* <SiJavascript /> */}
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAABL1BMVEX///8AAABKp79Fr7xGrr1HrL1CtLtAuLpLpb8/ublMpMBEsbxCtbpDsrtBtLr8/Pw9vbje3t49vLhHqr5KqL5OocH19fVYWFg7v7dMocBVVVXk5ORQUFDs7Ow8vLft7e1HR0dEREQJGBkiIiITExM9PT0YGBgvLy82NjYVNjpIuMUFDxALHyARKy8WMDhSpsm3t7c5q6kQLi4mcHA2jpY7m6QYPkIudn4gT1dNt8tCnq8dRU1GlK9Dh6QeHh4QNjMyqJ8yopoLIiEdVlYZSko3n6BHw8omZmswf4Y5k50qa3M3ipYkV2Ayd4U3fY4xanwRJS0aMz8sV2sTQj0mgHk/zcMfZ2ExmJQvjYxFycs0iZExe4U/lqcjUV2+vr5SutU3c4kgQ1ExZHk+f5lJkrPBkB89AAAUe0lEQVR4nN1di1/ayBY2gAoFqqv0Fu9at6WPXQJIEXnjdavyBh/d9qqI11r7//8N90zCIzNzJpPwDH797a/dJBPmm3PmnDPnJJOVlTli4/PuJ+XT7ueNef7oPPHmtaLj9ZtFd2UW2Fj5fVcZ4O1vi+7O9LGx8ttrZYR//7byzFSVIQiK+swoUiqqY/f350RxY+VfHxUWH//1fCgCwQ8cQcCzobix8sd7jKDy/s3zoAhz8C1KUFHe/b7ozk0DYEX/LSCoOY2lB+cmaCy/0wAVFUtQk+KSOw0wMu9MCcJc/GOZKYKbwK2oEf9ZYqcBBD9JCSrKh6WVIsxBREVj/KGPSzoXcTfxz7d/+IO7S+k0cDdx/OX7l2P+8DI6DVBRhODJ39/D3/8+4U8s33pxY+UNFqoBwTBQRM68XbIYFazonyKCAorvl8ppAEGEw0GfIKF4gJxfIoqgovyCVzkeEiQUEXPz1xI5jd/YlAUh+CVsAGpRl8VpiNxEmMbyOg2c4AFLMBzG5uIyUIQ5iKho7G+OIFBE/KLzM3BgRf/i+61gBMPfMYP6l8MtKu4mTgxW1EDwv8ilisOdBqgo4uiPUQmGryM4wz8dHN0gmW0FsaI69pA1hg7nlm1M3cQmBTiQRhaKfTg1DLfsJnQdxczMAM50GriKRv7mBbgZ3gzvnZkQdKbTQIsvipIK723y2At/MyXoxLINXnyJYARBouEvEoKK8sFhFPHiywEuQQASk7J476gMHF58ASuKEtz7nmaujJ0irsNJZRs8q3b8ZRMnyOvo2R620nBO2UbkJjb39va2WABrztdHrsObTl5M4cWXeAoI4iJkdVRJh7f2NlNYBs4RTgOMDJZVS6ES3NrbC1+zVE42ybWbKeQuTijb4MWXmMiKgo5yvl43SHvhFBLHLT4Dh/vBA5DgFirBzU1eR7/DCfJnM4VEcov2izAHkQUvWFGeXd/QcDr6j+EkZm4+LtRpbOBZtWsBQSJVVkdPyMUDcW9eOywDh7uJk+tbsQh5HaXPV3C/uCBFxYsvSuT0JiXguFlhjclZirkCdRoLoigovhCOx2nC0ccS9N2ypuTkZpO+yoc6jcWUbQTFlz5ip5Xb2y2fEUCQ09H/0peQi7Ywin8uwKLiWTUjDr6BeEinh+KpsJdkfaygNYqIos4/AwcqiuVFacTTFZ1kXzxsPBq7vvVxAIqYuZl32QZ3EwjA6mzpJLe2uNxT+tbHaqmY4nydhuRRLgpn6coWWB3fFpd7OtjijZE+HPy1ynxXGnYIAo5Pb3y3W6lT9vg1IsA+UlnkPvOjiBdfzBA/+5bick9pMcGtCpprnFcGTlB8MUfshM3hZ1NCgr6tG8yczqtsg7uJeNwm5YiJjvq2vokS4nOgiBdfDiqp9LGg0oIjLeYHDLnQYIDZl20EWbWKz3ebujk1y9TTODPRUUBN2HDWZRtB8QUIrhNHdp3GbCCCkxtTgrzdHWG2Ybggq1Yx9O3GvCDRx5nvloyJkKHZQM3SaeBZtQitcOuVmnxCnhAX6fPhLNd9uLMYYHZOQ1R88a0bAR1MpXFjb0SMrLDolqNb3JiP0azKNqLiC9LN2/UbKxPyjMxfDHVJw9mkpwTFlwrex9vbSu1AXOUdIHsTwFoLncUA/5lBHlXoJnBFA1W7TaXP5HHAQbrCt6VN6TGiD++m7jQExRcxQU2QgZua3EWSvA7dLkXb43Qlyrea9mJK5CbM+OmQTSmCGKyw1qsGhtSwxOq3mG2drtMQFF80ggEhyMl1S+4RBuv0BuxTf1JWKFMav2E565hm2UZUfFlHzYQBAT73JEQ8WyccyS1vaPKV20Aacx/TK9uIii+EoFiC0NfAOpd7MidZS2kcac3OVlB+yvTKNoLiS0VKEICYCHOcgUqu03F3TOx0puUXf0cimWhFqqLriF+LygO6g7pZ3M1gOm/bYFk1QjAgkSDoaILtfaV+Kg/oEjZW05M7DdwPHkgJErzk7OhNdT1wk7atumaY1GkI3nypSNkRIdbZCVTTTGWg0rW4irSEydaLgqyalTkIOsrqY/SlRlAjaX2qSTFJ2UZQfKmsv5SLMBDgdPRwJPn1akrkAuxj/LKN4JHmSvWlBVRzbMN0YHR27WWgGuhmp0VyTIp48SWSCYhpjRDIsA3PKmtAbMCQ/KtaPTyNyldYDA5YA62MW7YRFF8ih8BQZkSh96zBjNPtdLLVQCV3ZkuQ0VolM6WVhrA2AfYCREBA/zUCXMDraC2wFggYriFy1jgHD2tyF9lHNpeB0cEo2ncaJsWXWnXtJcfKCCCYYZ12NEgRNBCFw5mcJRcZ7WqDAjNgCosp0+JLpmrGTwNvR4VttNEK1C3IMX6aWatqV3MPPCh2M3CCrFofJ1VENY095nX0VNRE41ddy1nLlsei3UBVo4ictFO2kdXoaxIhNlhzFze7uhoU5/ARkrUKzJJABYtdLVPEiy/GX8kE1l4GcUCXg3m2AVy/hl1JULHDT8PpIUxqbC5aLduY7CczwNmaSE+J1vF2FLtcOxDMWEiQ88jWK2sZJLi1VraxUsKO5XiR9AUTXOPsaDaICJDIMNg9tVt2HCBayxwiFK2E4dZq9NHMWhDpN+k1Z0fjXfZCorIw/er5SaK2k1NseOROQ5BV67J9qQlkGER8PSZC4FeaNCqNYxGfzGmAFX2HNMtw/Y4dCoToZ9sScRsu7MsvZz8gtYiPphk4fLuVCFFJVukPMH7QfzY6iXSrnPzWarOiR2CWnsKLLwlCMHjI6amKMFSbbGvusrWMHfdwZi8w1yAu2+D7yYCW+YPwh+sXHGcQXGuwkz/hB1KjC4J+m+6hoXbbtvM6ordt8KRTtKFqnVO5iD6hBv2UdGAYOF9/qGrENJpBFdYREveQzdMKnIFGmdyZTa3G37YRFF8yar+DKpdYyql+mmAwx+WeBjpK+Pm7bYn8ojk//SsRN7RUg+6uzcAAcxoCN5FRRxrGCshwUkeGy4+O9FP11/MS+UXr7qBKT4ZovzXcu4ms7cXgyzaC4ouRg8olJvLMPOR1dNjWL3UPiS4horbFv1C3MyHfMTGqoPhCC0nlnGLOeF7lSoW1ET+ZkmUPVf1eJfQO+m3UDDeGYtBlG7z4kmC1UGUHMWq8ghNxNuP3u+GEuykRXzzf6PPzM/asznSg6m5aDxUMFDfw4gtLEH6fsySGX2djgnhXay91D4n2kJ9fZZaWh0G2C6q7nrc4I41lG7T40lDd3O1Zhx7pClWYsFf9DRm/aG3EDxp0KWsUybA98Gs3bVorCwwycLibIAQ5+N3srbNwDI6DGWKZRN2q24J7yECPR/dXaX+TyPj5Trjdqj9zl7eirAOngTn6eEOfQgxBP7fIaEIHyR/WBsQaqgX3QGaqe/gzcB/aWZQwfvqQuhuy4IFAd/3Ymy9xt6rfi+PIB2/kSpXz9e26LGd/UNeGhr497SzaGMP+pTDDc/IJSQK4DSxtGL1rgHFWeR3Bgjc4yuWe8MWb8Re6fmQauOnlc5PVIkqS0MOu1EXubqx8Fp1LtOsZ95Cl/lt+t3rHdr0JPbXhpwgiJXB/o7sKx68uJNjXLnCRtYT5WH5eMc06JfK5wwxzaz6TxttRUySI+/NgvWZ0IdIyYThoorpzpvPh7Qq607YR8WztrpGBHqn9cWZneJ7XUTN+tYYb00/t3nWqr4mGnCFRVrDZ4h58WLHUrUg037xrFGHEVDfnFGM24sVoE/h5PB43+eNm/vK4aWXIFt3uwXn2Wrdn+LcHRqyRE7pIuQyHRBLZdrOV8ahc9GIZiTuY2W5UQXXQg5cnvbcCclWm1UZ/84P5POQQB5p39qadgd8q6YrHBHQna+YX04BLG03ERb4V21IhYmOlARN3Hml/i7R2NG0QJFBXEYafcX84bcSyLVWVi6FIGYzYnbwJPUDIL7/dwGOa6SJeAn6rFrrYoB+7bNlhuIoS1JNStl61s49Eu+Wx2NUW3bDhsTIsw+FBPIYel9p8m9Auv2YD+FnsKessbPDzNPb5Hx+sLSy/8joGvxzp5apVMEmaVastYQQbpk9o4Gv8qfAjnbROkU7StK039PQQgsY1vugzKRMh2ioUPP0htigJqpuxZsEywSIWtbGpKPkW/zYRL7VbRY/G0hpFT5EypZE7qwwLRQs72wjypdFsYrIqXyLfaehmRhOSKVVPgx6hlhWG5I6om+Bq+njOe79XvGvms5IlmATxUrPVK67KRXlHD07Rouh7SCSDvaqAO439XqGwWmx1mnkLj2ibIBJtdwhNj5lc6Lg7aonf6moPmYN4sVtQe2rpg7/da91ZTOKJEEuUgCZhidMs0GvrkjURYlZU9CCfoH7Y82zrHSjcTf6Ediwezbc7PbgZwpK+fduSocEIinfrwy1qorcKFAurd9lxHw3BaDZbxRHLbQD8Rc+DTmFbAugX5ibMXt0T1PGhL6sdW8UtSzzBzhJhQj/1/jImsVXYNhcftCkixsH8NRPBsxi9ztQeymYQi4LT1MSxXaDjbqUoEyEQRO5o/iyGhe8zzQL7MDOL24UOdTAi09Dt7R4y7vKHMGe70hAjUerQUWlCOg2tuwlnUGRRKgxEJZIgYkWtvV5i4dlEc0zncaCmRIYYQatbSkCMav58qQT5VrM0uWNpw8wsiFliKmp9WxD5Pl6mgJC5sN3r5C8nuYkSgxCo2RKxLE70jLDsOW8WEXY4S8XQtta11kUpEZlMaS/vOz0jtVBII4hcaW97HlsbJZ232COdfncKmjDbpX1Zrc0c8dJFqxcyqujEz+rbsqj3hRCbT4/3YKjhjzbgwLJ4fgE0J1ucZLXFiXAO2n9JzzLFOLDosXmuEmE3wjbMpWIPaEYnskCx/dIFLE5aSFZtnLcQ8X3yeZyTqdFh1aZTCDHQJhGhWZoowo0lskj78V6WtbRxoNLWdDFUYg7HQtsswyHPYq9zj4hhAoy75SAoqvTeiaLW8+0WO8nynBAHPHVzWGzZf25UiAlesZQWps77PX/ginfnBRfKUYPL5Qo9PISIMCf0JspkW39urPzP3C+2XX2EXOzs2C+6zKENzEPIBTNz/3ICmpNt3yqxqNFeSO9pyBU659mHTKSoCVJrvQ0se52LcSOgSff+MqUYOR8JxPVwz5y9PA/JpOgiQ6P9qxAaM8s1+SYuZmWbe10M/c5yKRMI3iQUdWXV/uJcqjVMYyMecdkm4qX7yulpxwLBYWNaS/ethQbT2RdDWLY5Z3vJ6mm8Z5lg6JyuWfRcvYuSdGpOa28TQdmm9MB2k4sXS9ZleEFZU2KIQ3D/87bZI8HT+6wAXraJ8RK6YK+RGpshaH86HJqHBxDmfRQN9Kb5aQjBqwo9tv9eLnhjpqoYtIa3jaeIz5zCcklGES/buICBdwD4n3PWQNzDQa8MwKJMj82F1mr4H2Zop70HJl622S+7NGIDEXpdfPDm8lqRY3mfbaXfUbtpGSc4ZeBlG42iURpe1v5FvZakSDuLyLmhCUpwFp9KgsUUUtNIUBSJnrJXXMj5EYYx0V1dZZvFl0koontfGinCPx8emQsuzy0IkbHC2bKBoO3iy0QU3/G/pjCK6mV7VLIgQy89f+8NBJFfnN1n5wR70MKAvxjA+8LL66nhPA7vC9pZ/Oy38HoxCc5y43LcaVwSiv0xh79fcIuMMi63EV6Ur5gxIezgP2wOznbzeYFfLHu1Add7+6LM2tN772gIUIJeuknsR1+EAjcx0x298bINoWjQVD54M57GtPSJUsbLJ6+m7xjB2X+GFS/b7JeNHS4/Mqcjknn44gc3YOQ2ExVfJqGI7qtPUTxn7cP9gzlDWuqP2s3KExZfJqKI5VEpil/Zs0/mDGnjdK8RRH5jXp+0FnxcnKLIzqB9c4aP1MVfCcGZrybMKWK7KV4aKT6xZ3+aEaRNSuwCsceKEz7Dsn9Eeruzs8NLhdjH/kkewIdOYfx4cWTySPO8KGJlG6C4MxQLZ2x2cPnxEr8sY25i3h+Yw8s24DSGPH4w52I/RPx2WGfxhBD8a+4fJsOdxqVGUdPTnUfmXKKMqykc+0ldGMFybIv5LBn2xMZIioieihSVHQwOi/jumvDBaUJRFw4XvD2hlgYOyvLdi/l2ntBpHA26zgVvl6gphQsllafFfTRX5DT6HU8+sXHX1yRG8BUWvhiwyA8fCzJwQylywdtRcucVyw9GwpTgIr9DKszADShykckVR5DI+id/ixGmU3yZhCKWnrosE1mBdFinqPwkevqKwk6STQoYsejvAQt3tikntd4nH1nuRE8ZJE1M6eK/6Sx2GjqTHdZMPpKDDEWxKXXCd7mFGbijpKaBfPDGivDVKyFBZ3xbXZiBO9IV9ZE5vl+mhbiTPBIRXKSboCFyGhrFI9aefmWnIWeOBhJ0DEFhBk6nyPmCpyTNkPOaOt45REV14Dsu6orKB2+MDNnzOt47wsiMICjb/AKKySd2kfGVEmISfSBh8X6QheDBaY0iErzJnMXsii/jQ+w0kr+4zJtRhFhUOr+smh2InQYWvA0JcrZWcZKboCFaTCXR4G1A8Ipv4iQ3QUOUgUsmf7EH718lhQRnX3wZH/hu7oQi6xRjP5IaQSTonkfxZXwIMnBgUVlZXf0iJsghWTU7EJRtfiWPWJ/w9RWvu8r8ii/jQ1C2+cUv5I9+YcUXR6uoDlEG7tcjc+gKUdFdx1pRI3CncXXEBW88nOsmaOAPTl8dCdYQlASXBDAXkRj16ocktT3/4sv4wJ3G1Vfz3LbjragReNnm0uzB7cUUX8aH4MFpMcFFFV/GB+40hHjtyOWSOWy91+/U5ZI58AwcimXxgyzwsg2CRRdfxge+GQyHT0tmRY2wtEmaE4ov40Pw4LQRzii+jA/pfjdOKb6MD4nTWE43QcPUaSzHelAGk/1u3i3NcskceNlGcV7xZXwI3kJ1XvFlfKBlGycWX8YHkg13ZvFlfHBO4zm4CRoMxedHkFHU5+EHebwZSPH1m0V3ZVbY+Lz7Sfm0+3mu8vs/aJ63d+/u1mQAAAAASUVORK5CYII=" alt="" />
            <h3>Netlify</h3>
          </div>
          <div>
            {/* <SiHtml5 /> */}
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPAAAADSCAMAAABD772dAAAAclBMVEX///8AAABnZ2fc3NxHR0f6+vqCgoKpqak4ODi9vb319fXw8PCMjIzh4eHFxcWFhYWwsLAaGhpUVFTLy8ujo6MoKChCQkIgICATExNtbW1ZWVno6OgKCgpMTEzX19dhYWGbm5t3d3ctLS2SkpI7Ozu4uLhhpC/TAAAFs0lEQVR4nOWd4VZaSwyFHRWrUFvRgljUguj7v2Kv18Yl4cyZM3OS2cnwvYDZyx/f2skAJycYbm5AfxjEdD6fomeoyi6EHXqGmqzDf6zRU1Rk+x54i56iHnfhf+7Qc1Tj9iPwLXqOWtyEfxyJmqYLCvxyHGrahU+OQk3X4QvX6Gkq8PA18AN6Gn2ewx7P6HnUWe4HXqLn0eZbYHxDT6TL9J4Hvm9bTTuet3E1XR/mDY8tq+mhI3DLarrryttya7rtDtxsa7rpzttsa5odKIm4n6FnU+F7LG8I39GzabCO521zoXfaF/gUPZ08ESUR7alp2R/4HD2fNFElEW/oCWU5bEmcxlpTj5KIptR09pgO/HiGnlKQbTpvU7emhJKIZtQ0eRoW+GmCnlSIpJKIRlrTZDU08KqNf/EAJRFNLPS6FndRWljo9bYkTgOtaaCSCP9qOs8L7L41HdySUji/Nc0W6Yj7LHwv9DKURLhuTVlKIjyrqfOWlMLxrelHSd4QfqDnLiZTScQTeu5SBrckjtOF3nRwS+KsfC70fpbmDeEnevYSem9JKTzemoqURDhUU6GSCHdqmhQqiTj3tu3JbkkcZ61pmt2SOAtfahqhJMJVa3pO50nj6dY0SkmEIzVlLu5i+FnojVQS4WahN1pJhBM1lbckjpPWJKAkwkVrKlrcxfCw0PsjGfgPOk2akS2JY781CSmJML/QE1MSYVxN+bekFMZvTQW3pBSmW5OokgjLahJpSRzDrUlYSYRdNSUegZdi9iO34koijKppopU3BHS0bi70AptsTWd6eW0u9LJe3OVi8IWe0OIuhrmF3thbUgpztyY1JRHG1CTfkjjGWpNCS+KYak2qSiIsqUlVSYQhNSm1JI4dNV3WCfyKzkmoK4kwoia5W1IKI7cmwVtSChOtSWVxF8PCQq+KkggDarqqmTeEK3Re7ZbEgbemakoiwGqKf6GQFuDWVFFJBFRNVVoSB9maqiqJAKqpUkvi4G5NlVoS5xKV9xcmbwi/MHnrtSQOqDUBlERA1CTyCLwUxNdSi764ywXwQg+kJKK6miZKzxuGUr01wZREVFZT/ZbEqfz1rkAlEVXVVHVxF6PmQu83Ouw7v+vlrby4i1FvofeCjvrBS6281Rd3MSot9GZzdFBiXkdNii/ucrmokReyuItRY6EHWdzFqLDQM6IkQl1NU3BL4iy1tz3wlsRRbk0z2OIuxkpXTYaURKiqyZSSCE01RX5OB4tiawIv7mLovdAD3ZJSqN2azCmJUFITfnEXQ2mhZ2BxF0NloWdSSYSGmqC3pBQKtyZjLYkj3prQt6QUS+lbk1klEcILPXstiSO80DPYkjiircnELSmF5K3JxC0phWBrMq4kQkxNE6MtiXMppSbzSiKEWpPdlsQRak0OlESIqAn64i4XiRd6plsSR+DWZHRxF2P0C73JKzpCHq9j1bRBJ8hlMy7vbMCPjtricZyaHCmJGKUm04u7GGMWei5aEmdEa3LSkjjlrclJS+IU35rcKYnYlOVdu2lJnPuyH/NxqCSiSE0ulUSUqMlVS+IU3JqcKonIVpOXxV2M7IWem8VdjMyF3gw973jyWtMWPe54tjl5XS3uYuSoyeSLu1wyWpNzJRGD1eRdScRgNbltSZzNsLx2Ppc0loHPIBy3JM6g1tSEkoghtyaXi7sYA1qTs1tSivStychHZaVIfuR2h55Qmk1/3gZaEqdfTVv0ePL0tibXi7sYfa2pKSURPa3pDT2bDm+xvK20JE60NTXTkjib7rzrZloSZ959a9qi59KjszU11ZI4Xa3J9S0pRUdramRxF+Nwoaf+czpYFkejJIKpaYqeR5/9L/zYosfRZ681Na0k4quammxJnC+tqXElEZ9qarUlcT4fjze3uIvxT03ttiTO6qM1NXRLSnFxNEoi3tXUxPOGodwejZKIq5OL06Pi4i8/AYJFFKqnXQAAAABJRU5ErkJggg==" alt="" />
            <h3>Vercel</h3>
          </div>
          <div>
            {/* <DiCss3 /> */}
            <img src="data:image/png;base64,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" alt="" />
            <h3>Cyclic</h3>
          </div>
          <div>
            {/* <FaReact /> */}
            <img src="https://lokesh-patidar.github.io/static/media/vscode.646e6af675679fc4fca3.png" alt="" />
            <h3>VS Code</h3>
          </div>
          <div>
            {/* <FaNodeJs /> */}
            <img src="https://lokesh-patidar.github.io/static/media/postman.7fedeaff79947348538e.png" alt="" />
            <h3>Postman</h3>
          </div>
          <div>
            {/* <DiMongodb /> */}
            <img src="https://lokesh-patidar.github.io/static/media/git.7e19ced30f7817541e65.png" alt="" />
            <h3>Git</h3>
          </div>
        </div>
      </div>

    </>
  )
}