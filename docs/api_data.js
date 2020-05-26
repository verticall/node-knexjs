define({ "api": [
  {
    "type": "post",
    "url": "updateprofile",
    "title": "Update User",
    "version": "0.0.1",
    "description": "<p>API ของ Update User</p>",
    "group": "Profile",
    "header": {
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "examples": [
        {
          "title": "Body:",
          "content": "{\n      \"user_fullname\": \"\",\n      \"user_email\": \"\",\n      \"user_address\": \"\",\n      \"user_tel\": \"\",\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n  \"response\": true,\n  \"message\": \"200 OK\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/controllers/profile.controller.js",
    "groupTitle": "Profile",
    "name": "PostUpdateprofile"
  }
] });
