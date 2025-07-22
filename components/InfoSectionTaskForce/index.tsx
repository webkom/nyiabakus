import InfoSectionWrapper from "../InfoSectionWrapper";
import styles from "./styles.module.css";
import { Taskforce } from "@/sanity.types";
import { urlFor } from "@/utils/sanityImageUrl";
import Image from "next/image";

type Member = NonNullable<Taskforce["members"]>[number];

const roleOrder = ["leader", "viceLeader", "member"];
const memberSort = (a: Member, b: Member) => {
  const aRole = a.role ?? "member";
  const bRole = b.role ?? "member";
  return roleOrder.indexOf(aRole) - roleOrder.indexOf(bRole);
};

const IMAGE_WIDTH = 150;
const IMAGE_HEIGHT = 150;

const roleDisplayName = {
  leader: "Leder",
  viceLeader: "Nestleder",
  member: "Medlem",
};

const InfoSectionStudy = ({ taskforce }: { taskforce: Taskforce | null }) => {
  if (!taskforce) return null;

  return (
    <InfoSectionWrapper id="taskforce">
      <h2 className={styles.title}>1. Klasse Taskforce</h2>
      <p className={styles.description}>{taskforce.description}</p>

      {taskforce.members && taskforce.members.length > 0 && (
        <div className={`${styles.membersContainer} ${styles.grids}`}>
          {taskforce.members.sort(memberSort).map((member) => (
            <div key={member._key} className={styles.member}>
              {member.picture && (
                <Image
                  src={urlFor(member.picture)
                    .width(IMAGE_WIDTH)
                    .height(IMAGE_HEIGHT)
                    .url()}
                  width={IMAGE_WIDTH}
                  height={IMAGE_HEIGHT}
                  alt={member.name ?? "Taskforce Member"}
                  className={styles.memberImage}
                  loading="lazy"
                />
              )}
              <div className={styles.memberInfo}>
                <h3 className={styles.memberName}>{member.name}</h3>
                {member.role && (
                  <p className={styles.memberRole}>
                    {roleDisplayName[member.role]}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </InfoSectionWrapper>
  );
};

export default InfoSectionStudy;
