import Text "mo:core/Text";
import Map "mo:core/Map";
import Time "mo:core/Time";
import Runtime "mo:core/Runtime";
import Array "mo:core/Array";
import Order "mo:core/Order";
import Iter "mo:core/Iter";

actor {
  type DealerInquiry = {
    id : Nat;
    name : Text;
    email : Text;
    phone : Text;
    timestamp : Time.Time;
  };

  module DealerInquiry {
    public func compare(inquiry1 : DealerInquiry, inquiry2 : DealerInquiry) : Order.Order {
      Nat.compare(inquiry1.id, inquiry2.id);
    };

    public func toText(inquiry : DealerInquiry) : Text {
      inquiry.name # " - " # inquiry.email # " - " # inquiry.phone;
    };
  };

  var nextInquiryId = 1;
  let dealerInquiries = Map.empty<Nat, DealerInquiry>();

  public shared ({ caller }) func submitDealerInquiry(name : Text, email : Text, phone : Text) : async () {
    if (name.isEmpty()) {
      Runtime.trap("Name cannot be empty");
    };
    if (email.isEmpty() or not email.contains(#char '@')) {
      Runtime.trap("Invalid email");
    };
    if (phone.isEmpty()) {
      Runtime.trap("Phone number cannot be empty");
    };

    let inquiry : DealerInquiry = {
      id = nextInquiryId;
      name;
      email;
      phone;
      timestamp = Time.now();
    };

    dealerInquiries.add(nextInquiryId, inquiry);
    nextInquiryId += 1;
  };

  public query ({ caller }) func getDealerInquiries() : async [DealerInquiry] {
    dealerInquiries.values().toArray().sort();
  };
};
