import { Rule } from "sanity";

const Member = {
  title: "Member",
  name: "member",
  type: "object",
  fields: [
    {
      title: "Name",
      name: "name",
      type: "string",
      validation: (rule: Rule) => rule.required(),
    },
    {
      title: "Role",
      name: "role",
      type: "string",
      options: {
        list: [
          { title: "Leader", value: "leader" },
          { title: "Vice Leader", value: "viceLeader" },
          { title: "Member", value: "member" },
        ],
        layout: "dropdown",
      },
      validation: (rule: Rule) => rule.required(),
    },
    {
      title: "Picture",
      name: "picture",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],
  preview: {
    select: {
      name: "name",
      role: "role",
    },
    prepare({ name, role }: { name: string; role: string }) {
      return {
        title: name,
        subtitle: role,
      };
    },
  },
};

const TaskforceSchema = {
  title: "Taskforce",
  name: "taskforce",
  description: "Define task force members and their roles",
  type: "document",
  fields: [
    {
      title: "Members",
      name: "members",
      type: "array",
      of: [Member],
    },
    {
      title: "Description",
      name: "description",
      type: "text",
      description: "A brief description of the task force and its purpose",
    },
  ],
  preview: {
    prepare() {
      return {
        title: "Taskforce",
      };
    },
  },
};

export default TaskforceSchema;
